import { ref, readonly } from 'vue'

// ---- Configuration ----
const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID || ''
const WORKER_URL = import.meta.env.VITE_WORKER_URL || ''
const STORAGE_NS = import.meta.env.VITE_GITHUB_REPO_NAME
  ? import.meta.env.VITE_GITHUB_REPO_NAME
  : 'book-site'
const TOKEN_KEY = `${STORAGE_NS}::gh-token`
const USER_KEY = `${STORAGE_NS}::gh-user`

interface GitHubUser {
  login: string
  avatar_url: string
  html_url: string
}

// Restore token & user synchronously at module level so they're available
// during component setup phase (before onMounted / init() runs).
// This prevents the initial watch(route.path, { immediate: true }) from
// hitting the Worker proxy when the user is already logged in.
const _isBrowser = typeof window !== 'undefined'
const _savedToken = _isBrowser ? localStorage.getItem(TOKEN_KEY) : null
const _savedUser = _savedToken && _isBrowser ? localStorage.getItem(USER_KEY) : null

const token = ref<string | null>(_savedToken)
const user = ref<GitHubUser | null>(_savedUser ? (() => { try { return JSON.parse(_savedUser) } catch { return null } })() : null)
const loading = ref(false)
let revokePromise: Promise<void> | null = null

function getOAuthCallbackUrl(): string {
  const base = import.meta.env.BASE_URL || '/'
  const path = base.startsWith('/') ? base : `/${base}`
  const normalized = path.endsWith('/') ? path : `${path}/`
  return window.location.origin + normalized
}

function isSafeReturnTo(path: string): boolean {
  return path.startsWith('/') && !path.startsWith('//') && !path.includes('\\') && !path.includes('\n')
}

function isValidWorkerBaseUrl(value: string): boolean {
  if (!value) return false
  try {
    const u = new URL(value)
    return u.protocol === 'http:' || u.protocol === 'https:'
  } catch {
    return false
  }
}

export function useAuth() {
  function init() {
    // Check for OAuth callback code in URL
    const params = new URLSearchParams(window.location.search)
    const code = params.get('code')
    const returnTo = params.get('state')
    if (code) {
      // Clean URL
      window.history.replaceState({}, '', window.location.pathname + window.location.hash)
      exchangeCode(code).then(() => {
        if (!token.value) return
        if (returnTo && isSafeReturnTo(returnTo) && returnTo !== window.location.pathname + window.location.search + window.location.hash) {
          window.location.replace(returnTo)
        }
      })
      return
    }

    // Token & user already restored at module level.
    // Just validate the token in background (and update user cache).
    if (token.value) {
      if (!user.value) loading.value = true
      fetchUser().finally(() => { loading.value = false })
    }
  }

  async function login() {
    if (!GITHUB_CLIENT_ID) {
      console.warn('[auth] missing VITE_GITHUB_CLIENT_ID')
      window.alert('未配置 GitHub OAuth（VITE_GITHUB_CLIENT_ID），暂时无法登录。')
      return
    }
    if (!isValidWorkerBaseUrl(WORKER_URL)) {
      console.warn('[auth] missing VITE_WORKER_URL')
      window.alert('未配置 OAuth 后端（VITE_WORKER_URL），暂时无法登录。')
      return
    }
    // Wait for any pending revoke to complete before starting new OAuth flow,
    // otherwise GitHub may auto-approve with the previous account's grant
    if (revokePromise) {
      await revokePromise
    }
    const callbackUrl = getOAuthCallbackUrl()
    const returnTo = window.location.pathname + window.location.search + window.location.hash
    const u = new URL('https://github.com/login/oauth/authorize')
    u.searchParams.set('client_id', GITHUB_CLIENT_ID)
    u.searchParams.set('scope', 'public_repo')
    u.searchParams.set('redirect_uri', callbackUrl)
    u.searchParams.set('state', returnTo)
    window.location.href = u.toString()
  }

  function logout() {
    const savedToken = token.value
    token.value = null
    user.value = null
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
    // Revoke GitHub OAuth grant so next login shows the authorization page,
    // allowing the user to switch accounts
    if (savedToken && isValidWorkerBaseUrl(WORKER_URL)) {
      revokePromise = fetch(`${WORKER_URL}/api/revoke`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ access_token: savedToken, client_id: GITHUB_CLIENT_ID }),
      })
        .then(() => { revokePromise = null })
        .catch(() => { revokePromise = null })
    }
  }

  async function exchangeCode(code: string) {
    if (!isValidWorkerBaseUrl(WORKER_URL)) {
      console.error('[auth] missing VITE_WORKER_URL (cannot exchange OAuth code)')
      return
    }
    loading.value = true
    // Must match the redirect_uri sent in login()
    const redirect_uri = getOAuthCallbackUrl()
    try {
      const resp = await fetch(`${WORKER_URL}/api/auth`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, client_id: GITHUB_CLIENT_ID, redirect_uri }),
      })
      const data = await resp.json()
      if (data.access_token) {
        token.value = data.access_token
        localStorage.setItem(TOKEN_KEY, data.access_token)
        // Already on the correct page — just fetch user info
        await fetchUser()
      } else {
        console.error('[auth] token exchange failed:', data)
      }
    } catch (e) {
      console.error('[auth] exchangeCode error:', e)
    } finally {
      loading.value = false
    }
  }

  async function fetchUser() {
    if (!token.value) return
    try {
      const resp = await fetch('https://api.github.com/user', {
        headers: { Authorization: `Bearer ${token.value}` },
      })
      if (resp.ok) {
        user.value = await resp.json()
        localStorage.setItem(USER_KEY, JSON.stringify(user.value))
        console.log('[auth] user loaded:', user.value?.login)
      } else if (resp.status === 401) {
        console.warn('[auth] token invalid (401), clearing session')
        logout()
      } else {
        console.warn('[auth] fetchUser failed:', resp.status)
      }
    } catch (e) {
      console.warn('[auth] fetchUser network error:', e)
    }
  }

  return {
    token: readonly(token),
    user: readonly(user),
    loading: readonly(loading),
    init,
    login,
    logout,
  }
}
