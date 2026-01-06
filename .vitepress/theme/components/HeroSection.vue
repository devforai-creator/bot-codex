<script setup lang="ts">
import { ref, onMounted } from 'vue'
import content from '../../../content.json'

const bot = content.bot
const theme = content.theme
const decorations = theme.decorations
const effects = theme.effects

const displayText = ref('')
const showCursor = ref(true)
const isLoaded = ref(false)

onMounted(() => {
  // Fade in
  setTimeout(() => {
    isLoaded.value = true
  }, 100)

  // Typing effect
  const tagline = bot.tagline
  let i = 0
  setTimeout(() => {
    const typeInterval = setInterval(() => {
      if (i < tagline.length) {
        displayText.value += tagline[i]
        i++
      } else {
        clearInterval(typeInterval)
      }
    }, 60)
  }, 500)

  // Cursor blink
  setInterval(() => {
    showCursor.value = !showCursor.value
  }, 600)
})
</script>

<template>
  <section class="hero" :class="{ loaded: isLoaded }">
    <!-- Corner frames -->
    <div class="frame-corner top-left"></div>
    <div class="frame-corner top-right"></div>
    <div class="frame-corner bottom-left"></div>
    <div class="frame-corner bottom-right"></div>

    <!-- Side decorations -->
    <div class="side-decor left">
      <div class="decor-line"></div>
      <span class="decor-symbol">{{ decorations.divider }}</span>
      <div class="decor-line"></div>
    </div>
    <div class="side-decor right">
      <div class="decor-line"></div>
      <span class="decor-symbol">{{ decorations.divider }}</span>
      <div class="decor-line"></div>
    </div>

    <!-- Main content -->
    <div class="hero-content">
      <div class="hero-emblem" :class="{ 'glow-text': effects.glow }">
        {{ decorations.ornament }}
      </div>

      <div class="hero-subtitle">
        {{ decorations.divider }} {{ bot.genre?.join(' · ') }} {{ decorations.divider }}
      </div>

      <h1 class="hero-title" :class="{ 'glow-text': effects.glow }">
        {{ bot.name }}
      </h1>

      <div class="hero-tagline">
        <span class="tagline-text">{{ displayText }}</span>
        <span class="cursor" :class="{ visible: showCursor }">|</span>
      </div>

      <div class="hero-divider">
        <span class="divider-line"></span>
        <span class="divider-symbol">{{ decorations.bullet }}</span>
        <span class="divider-line"></span>
      </div>

      <p class="hero-description">
        {{ bot.description }}
      </p>

      <div class="hero-actions">
        <a :href="bot.playLink" class="btn btn-primary" target="_blank">
          <span class="btn-icon">{{ decorations.bullet }}</span>
          Play Now
        </a>
        <a href="/world/" class="btn">
          Explore World
        </a>
      </div>
    </div>

    <!-- Bottom ornament -->
    <div class="bottom-ornament">
      {{ decorations.ornament }}
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 4rem 2rem;
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease-out;
}

.hero.loaded {
  opacity: 1;
  transform: translateY(0);
}

/* Frame Corners */
.frame-corner {
  position: absolute;
  width: 60px;
  height: 60px;
  border: 2px solid var(--primary);
  opacity: 0.4;
}

.frame-corner.top-left {
  top: 2rem;
  left: 2rem;
  border-right: none;
  border-bottom: none;
}

.frame-corner.top-right {
  top: 2rem;
  right: 2rem;
  border-left: none;
  border-bottom: none;
}

.frame-corner.bottom-left {
  bottom: 2rem;
  left: 2rem;
  border-right: none;
  border-top: none;
}

.frame-corner.bottom-right {
  bottom: 2rem;
  right: 2rem;
  border-left: none;
  border-top: none;
}

/* Side Decorations */
.side-decor {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.3;
  color: var(--primary);
}

.side-decor.left { left: 3rem; }
.side-decor.right { right: 3rem; }

.decor-line {
  width: 1px;
  height: 50px;
  background: linear-gradient(to bottom, transparent, var(--primary), transparent);
}

.decor-symbol {
  font-size: 0.6rem;
}

/* Content */
.hero-content {
  max-width: 800px;
  position: relative;
  z-index: 1;
}

.hero-emblem {
  font-size: 3rem;
  color: var(--primary);
  margin-bottom: 1rem;
  opacity: 0.8;
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.hero-subtitle {
  font-family: var(--font-display);
  font-size: 0.85rem;
  color: var(--text-muted);
  letter-spacing: 0.25em;
  margin-bottom: 1rem;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 600;
  letter-spacing: 0.1em;
  margin-bottom: 1.5rem;
  color: var(--text);
}

.glow-text {
  text-shadow:
    0 0 20px var(--glow),
    0 0 40px var(--glow);
}

.hero-tagline {
  font-family: var(--font-display);
  font-size: 1.2rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
  min-height: 2rem;
  font-style: italic;
}

.cursor {
  opacity: 0;
  transition: opacity 0.1s;
}

.cursor.visible {
  opacity: 1;
}

.hero-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  color: var(--primary);
  opacity: 0.5;
}

.divider-line {
  width: 60px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--primary), transparent);
}

.divider-symbol {
  font-size: 0.8rem;
}

.hero-description {
  font-size: 1.1rem;
  color: var(--text-muted);
  line-height: 1.9;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Actions */
.hero-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 2rem;
  font-family: var(--font-display);
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: var(--primary);
  background: transparent;
  border: 2px solid var(--primary);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background: var(--primary);
  color: var(--bg);
  box-shadow: 0 0 20px var(--glow);
}

.btn-primary {
  background: var(--primary);
  color: var(--bg);
}

.btn-primary:hover {
  background: transparent;
  color: var(--primary);
}

.btn-icon {
  font-size: 0.8rem;
}

/* Bottom */
.bottom-ornament {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5rem;
  color: var(--primary);
  opacity: 0.3;
}

/* Responsive */
@media (max-width: 768px) {
  .frame-corner {
    width: 30px;
    height: 30px;
  }

  .side-decor {
    display: none;
  }

  .hero-emblem {
    font-size: 2rem;
  }
}
</style>
