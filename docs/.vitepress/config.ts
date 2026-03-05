import { defineConfig, type HeadConfig } from 'vitepress'
import { loadEnv } from 'vite'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import container from 'markdown-it-container'

const docsDir = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const DEFAULT_GOOGLE_FONTS_CSS_URL =
  'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600&display=swap'

function normalizeBase(input: string | undefined): string {
  const base = input || '/'
  return base.endsWith('/') ? base : `${base}/`
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, docsDir, '')

  const base = normalizeBase(env.VITEPRESS_BASE || process.env.VITEPRESS_BASE)
  const githubRepoSlug = process.env.GITHUB_REPOSITORY // "<owner>/<repo>" in GitHub Actions
  const repoUrl = githubRepoSlug ? `https://github.com/${githubRepoSlug}` : undefined

  const useGoogleFonts = (env.VITEPRESS_GOOGLE_FONTS || process.env.VITEPRESS_GOOGLE_FONTS) === '1'
  const googleFontsCssUrl =
    env.VITEPRESS_GOOGLE_FONTS_CSS_URL ||
    process.env.VITEPRESS_GOOGLE_FONTS_CSS_URL ||
    DEFAULT_GOOGLE_FONTS_CSS_URL

  const head: HeadConfig[] = [['link', { rel: 'icon', href: `${base}favicon.ico` }]]

  if (useGoogleFonts) {
    head.push(
      ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
      ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
      ['link', { rel: 'stylesheet', href: googleFontsCssUrl }],
    )
  }

  return {
    title: '数学分析原理（Rudin）',
    description: 'Walter Rudin《Principles of Mathematical Analysis》中文整理版',
    lang: 'zh-CN',
    // For GitHub Pages, set `VITEPRESS_BASE=/<repo>/` in CI.
    base,

    head,

    themeConfig: {
      nav: [
        { text: '首页', link: '/' },
        { text: '开始阅读', link: '/chapters/ch01-real-complex' },
      ],
      sidebar: [
        {
          text: '导读',
          items: [
            { text: '前言', link: '/chapters/preface' },
            { text: '重要符号表', link: '/chapters/notation' },
          ],
        },
        {
          text: '章节',
          items: [
            { text: '第 1 章 实数系和复数系', link: '/chapters/ch01-real-complex' },
            { text: '第 2 章 基础拓扑', link: '/chapters/ch02-basic-topology' },
            { text: '第 3 章 数列与级数', link: '/chapters/ch03-sequences-series' },
            { text: '第 4 章 连续性', link: '/chapters/ch04-continuity' },
            { text: '第 5 章 微分法', link: '/chapters/ch05-differentiation' },
            { text: '第 6 章 Riemann–Stieltjes 积分', link: '/chapters/ch06-riemann-stieltjes' },
            { text: '第 7 章 函数序列与函数项级数', link: '/chapters/ch07-series-of-functions' },
            { text: '第 8 章 一些特殊函数', link: '/chapters/ch08-special-functions' },
            { text: '第 9 章 多元函数', link: '/chapters/ch09-several-variables' },
            { text: '第 10 章 微分形式的积分', link: '/chapters/ch10-differential-forms' },
            { text: '第 11 章 Lebesgue 理论', link: '/chapters/ch11-lebesgue' },
          ],
        },
      ],
      socialLinks: repoUrl ? [{ icon: 'github', link: repoUrl }] : [],
      outline: { level: [2, 3], label: '本页目录' },
      search: { provider: 'local' },
    },

    markdown: {
      math: true,
      config: (md) => {
        // Register ::: notes custom container.
        md.use(container, 'notes', {
          render(tokens: any[], idx: number) {
            if (tokens[idx].nesting === 1) {
              return '<div class="author-notes">\n'
            }
            return '</div>\n'
          },
        })
      },
    },
  }
})
