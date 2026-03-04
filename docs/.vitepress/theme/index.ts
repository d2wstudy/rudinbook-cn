import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { onMounted, watch, h, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import { useAuth } from './composables/useAuth'
import LoginButton from './components/LoginButton.vue'
import Anno from './components/Anno.vue'
import AnnotationLayer from './components/AnnotationLayer.vue'
import ChapterComments from './components/ChapterComments.vue'
import './style.css'

let legacyCounter = 0

/** djb2 hash → short base-36 string, used for content-stable paragraph IDs */
function hashText(str: string): string {
  let h = 5381
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) + h + str.charCodeAt(i)) & 0xffffffff
  }
  return (h >>> 0).toString(36)
}

function getTextSample(el: Element, maxLen: number): string {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT)
  let text = ''
  while (text.length < maxLen) {
    const n = walker.nextNode() as Text | null
    if (!n) break
    const parent = n.parentElement
    // Ignore the inline note bubble count so it won't affect paragraph IDs.
    if (parent?.closest('.anno-inline-bubble')) continue
    text += n.textContent || ''
  }
  return text.trim().replace(/\s+/g, ' ').slice(0, maxLen)
}

export default {
  extends: DefaultTheme,

  enhanceApp({ app }) {
    app.component('LoginButton', LoginButton)
    app.component('Anno', Anno)
    app.component('AnnotationLayer', AnnotationLayer)
    app.component('ChapterComments', ChapterComments)
  },

  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => [h(LoginButton)],
      'doc-after': () => [h(AnnotationLayer), h(ChapterComments)],
    })
  },

  setup() {
    const { init: initAuth } = useAuth()
    const route = useRoute()

    onMounted(() => {
      initAuth()
      assignParagraphAnchors()
    })

    watch(() => route.path, () => {
      legacyCounter = 0
      nextTick(() => {
        // Wait for the new page content to render.
        setTimeout(assignParagraphAnchors, 50)
      })
    })
  },
} satisfies Theme

/**
 * Assign stable IDs to paragraph-like blocks inside `.vp-doc` so reader notes can anchor reliably.
 */
function assignParagraphAnchors() {
  if (typeof document === 'undefined') return

  const content = document.querySelector('.vp-doc')
  if (!content) return

  // Remove old anchors (HMR / route changes)
  content.querySelectorAll('[data-paragraph-id]').forEach((el) => {
    el.removeAttribute('data-paragraph-id')
  })
  content.querySelectorAll('[data-paragraph-id-legacy]').forEach((el) => {
    el.removeAttribute('data-paragraph-id-legacy')
  })

  legacyCounter = 0
  const ANCHOR_SELECTOR = 'p, li, blockquote, pre, table'

  let currentHeadingSlug = 'top'

  const walker = document.createTreeWalker(content, NodeFilter.SHOW_ELEMENT)
  while (true) {
    const node = walker.nextNode() as Element | null
    if (!node) break

    if (/^H[1-6]$/.test(node.tagName)) {
      currentHeadingSlug = node.id || node.textContent?.trim().slice(0, 20) || currentHeadingSlug
      continue
    }

    if (!node.matches(ANCHOR_SELECTOR)) continue
    // Only keep the outermost anchor element for a given subtree.
    const parentAnchor = node.parentElement?.closest(ANCHOR_SELECTOR)
    if (parentAnchor && content.contains(parentAnchor)) continue

    const raw = getTextSample(node, 80)
    const pid = `${currentHeadingSlug}-${hashText(raw || String(legacyCounter))}`
    const legacyId = `${currentHeadingSlug}-p${legacyCounter++}`

    node.setAttribute('data-paragraph-id', pid)
    node.setAttribute('data-paragraph-id-legacy', legacyId)
  }
}
