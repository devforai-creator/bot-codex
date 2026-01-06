import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import './style.css'

export default {
  Layout,
  enhanceApp({ app }) {
    // Register global components here if needed
  }
} satisfies Theme
