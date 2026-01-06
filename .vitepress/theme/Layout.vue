<script setup lang="ts">
import { useData } from 'vitepress'
import { ref, onMounted, computed } from 'vue'
import content from '../../content.json'

const { frontmatter } = useData()

// content.json에서 데이터 가져오기
const theme = content.theme
const bot = content.bot
const decorations = theme.decorations
const effects = theme.effects

onMounted(() => {
  // CSS 변수 동적 적용
  const root = document.documentElement

  // Colors
  const colors = theme.colors
  root.style.setProperty('--primary', colors.primary)
  root.style.setProperty('--secondary', colors.secondary)
  root.style.setProperty('--accent', colors.accent)
  root.style.setProperty('--bg', colors.background)
  root.style.setProperty('--surface', colors.surface)
  root.style.setProperty('--text', colors.text)
  root.style.setProperty('--text-muted', colors.textMuted)
  root.style.setProperty('--glow', colors.glow)

  // Fonts
  const fonts = theme.fonts
  root.style.setProperty('--font-display', `'${fonts.display}', serif`)
  root.style.setProperty('--font-body', `'${fonts.body}', sans-serif`)
  if (fonts.accent) {
    root.style.setProperty('--font-accent', `'${fonts.accent}', serif`)
  }

  // Effects
  root.style.setProperty('--glow-intensity', String(effects.glowIntensity || 0.6))
})

// 코너 스타일에 따른 클래스
const cornerClass = computed(() => {
  return `corner-${decorations.cornerStyle || 'flourish'}`
})
</script>

<template>
  <div
    class="layout"
    :class="[
      cornerClass,
      {
        'effect-vignette': effects.vignette,
        'effect-scanlines': effects.scanlines,
        'effect-noise': effects.noise
      }
    ]"
  >
    <!-- Vignette overlay -->
    <div v-if="effects.vignette" class="vignette-overlay"></div>

    <!-- Scanlines overlay -->
    <div v-if="effects.scanlines" class="scanlines-overlay"></div>

    <!-- Noise overlay -->
    <div v-if="effects.noise" class="noise-overlay"></div>

    <!-- Sparkle effect -->
    <div v-if="effects.sparkle" class="sparkle-container">
      <div
        v-for="i in 20"
        :key="i"
        class="sparkle"
        :style="{
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
          animationDelay: Math.random() * 4 + 's',
          animationDuration: (3 + Math.random() * 2) + 's'
        }"
      ></div>
    </div>

    <!-- Header -->
    <header class="header">
      <div class="header-content">
        <a href="/" class="logo">
          <span class="logo-ornament">{{ decorations.ornament }}</span>
          <span class="logo-text" :class="{ 'glow-text': effects.glow }">{{ bot.name }}</span>
          <span class="logo-ornament">{{ decorations.ornament }}</span>
        </a>

        <nav class="nav">
          <a href="/" class="nav-link">Home</a>
          <span class="nav-divider">{{ decorations.divider }}</span>
          <a href="/world/" class="nav-link">World</a>
          <span class="nav-divider">{{ decorations.divider }}</span>
          <a href="/characters/" class="nav-link">Characters</a>
          <span class="nav-divider">{{ decorations.divider }}</span>
          <a href="/episodes/" class="nav-link">Episodes</a>
        </nav>

        <div class="header-status">
          <span class="status">
            <span class="status-dot"></span>
            {{ bot.genre?.[0] || 'Archive' }}
          </span>
        </div>
      </div>
      <div class="header-border"></div>
    </header>

    <!-- Main Content -->
    <main class="main">
      <Content />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-border"></div>
      <div class="footer-content">
        <span class="footer-ornament">{{ decorations.ornament }}</span>
        <span class="footer-text">{{ content.meta?.credits || 'Created with Bot-Codex' }}</span>
        <span class="footer-ornament">{{ decorations.ornament }}</span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
}

/* ==================== Overlays ==================== */

.vignette-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    ellipse at center,
    transparent 0%,
    transparent 50%,
    rgba(0, 0, 0, 0.5) 100%
  );
  pointer-events: none;
  z-index: 9998;
}

.scanlines-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.03),
    rgba(0, 0, 0, 0.03) 1px,
    transparent 1px,
    transparent 2px
  );
  pointer-events: none;
  z-index: 9997;
}

.noise-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.05;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 9996;
}

/* Sparkle */
.sparkle-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
}

.sparkle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--primary);
  border-radius: 50%;
  opacity: 0;
  animation: sparkle-anim 4s infinite;
}

@keyframes sparkle-anim {
  0%, 100% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 0.8;
    transform: scale(1);
  }
}

/* ==================== Header ==================== */

.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: color-mix(in srgb, var(--bg) 95%, transparent);
  backdrop-filter: blur(10px);
}

.header-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.25rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-border {
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--primary),
    transparent
  );
  opacity: 0.5;
}

/* Logo */
.logo {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  letter-spacing: 0.1em;
  text-decoration: none;
  color: var(--primary);
}

.logo-ornament {
  font-size: 1rem;
  opacity: 0.7;
}

.logo-text {
  color: var(--primary);
}

.glow-text {
  text-shadow:
    0 0 10px var(--glow),
    0 0 20px var(--glow);
}

/* Navigation */
.nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-link {
  font-family: var(--font-display);
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  text-decoration: none;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: var(--primary);
}

.nav-link:hover::after {
  width: 100%;
}

.nav-divider {
  color: var(--primary);
  opacity: 0.3;
  font-size: 0.6rem;
}

/* Status */
.header-status {
  display: flex;
  align-items: center;
}

.status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-display);
  font-size: 0.75rem;
  color: var(--text-muted);
  letter-spacing: 0.1em;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: var(--primary);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.9); }
}

/* ==================== Main ==================== */

.main {
  flex: 1;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 1;
}

/* ==================== Footer ==================== */

.footer {
  position: relative;
  z-index: 1;
  padding: 1.5rem 2rem;
}

.footer-border {
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--primary),
    transparent
  );
  opacity: 0.3;
  margin-bottom: 1.5rem;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}

.footer-ornament {
  color: var(--primary);
  opacity: 0.5;
  font-size: 0.8rem;
}

.footer-text {
  font-family: var(--font-display);
  font-size: 0.85rem;
  color: var(--text-muted);
  letter-spacing: 0.1em;
}

/* ==================== Responsive ==================== */

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 1rem;
  }

  .nav {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav-divider {
    display: none;
  }

  .header-status {
    display: none;
  }
}
</style>
