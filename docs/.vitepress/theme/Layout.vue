<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useData, useRoute, withBase, Content } from 'vitepress'
import HomePage from './HomePage.vue'

const { frontmatter } = useData()
const route = useRoute()

const iconUrl = withBase('/brand/icon.svg')
const isHome = computed(() => frontmatter.value.layout === 'home')
const menuOpen = ref(false)

watch(() => route.path, () => { menuOpen.value = false })

function isActive(link: string): boolean {
  const path = route.path
  if (link === '/') return path === '/' || path === '/index.html'
  return path.startsWith(link)
}
</script>

<template>
  <div class="site">
    <header class="nav" role="banner">
      <div class="nav__inner">
        <a class="brand" href="/" aria-label="AISCGre Brasil, início">
          <img class="brand__mark" :src="iconUrl" alt="" />
          <span class="brand__name">AISCGre Brasil<small>seção brasileira</small></span>
        </a>

        <button
          class="nav__toggle"
          :aria-expanded="menuOpen"
          aria-controls="nav-links"
          aria-label="Abrir menu"
          @click="menuOpen = !menuOpen"
        >
          <svg v-if="!menuOpen" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/>
          </svg>
        </button>

        <nav aria-label="principal">
          <ul id="nav-links" class="nav__links" :class="{ open: menuOpen }">
            <li><a href="/sobre/" :class="{ active: isActive('/sobre/') }">sobre</a></li>
            <li><a href="/cursos/" :class="{ active: isActive('/cursos/') }">cursos</a></li>
            <li><a href="/eventos/" :class="{ active: isActive('/eventos/') }">eventos</a></li>
            <li><a href="/biblioteca/" :class="{ active: isActive('/biblioteca/') }">biblioteca</a></li>
            <li><a href="/noticias/" :class="{ active: isActive('/noticias/') }">notícias</a></li>
            <li><a href="/contato" :class="{ active: isActive('/contato') }">contato</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main>
      <HomePage v-if="isHome" />
      <div v-else class="article">
        <Content />
      </div>
    </main>

    <footer class="foot" role="contentinfo">
      <div class="foot__inner">
        <div class="foot__brand">
          <img :src="iconUrl" alt="" style="width:44px;height:44px;" />
        </div>
        <div class="foot__meta">
          <p>
            <strong>AISCGre — Seção Brasileira</strong><br/>
            Associação Internacional de Estudo do Canto Gregoriano.<br/>
            contato@aiscgre.org.br
          </p>
        </div>
        <p class="foot__colophon">MMXXVI · laus deo</p>
      </div>
    </footer>
  </div>
</template>
