import { defineConfig } from 'vitepress'
import content from '../content.json'

// 폰트 목록 생성 (동적으로)
const fonts = [
  content.theme.fonts.display,
  content.theme.fonts.body,
  content.theme.fonts.accent
].filter(Boolean)

// Google Fonts URL 생성
const fontFamilies = fonts.map(f => f.replace(/ /g, '+')).join('&family=')
const googleFontsUrl = `https://fonts.googleapis.com/css2?family=${fontFamilies}:wght@400;500;600;700&display=swap`

export default defineConfig({
  title: content.bot.name,
  description: content.bot.description,

  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: googleFontsUrl, rel: 'stylesheet' }],
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'World', link: '/world/' },
      { text: 'Characters', link: '/characters/' },
      { text: 'Episodes', link: '/episodes/' },
    ]
  }
})
