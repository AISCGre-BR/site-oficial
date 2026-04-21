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
          <ul id="nav-links" class="nav__links" :class="{ open: menuOpen }" @click="menuOpen = false">
            <li><a href="#aiscgre">aiscgre</a></li>
            <li><a href="#secao-brasileira">seção brasileira</a></li>
            <li><a href="#coros">coros</a></li>
            <li><a href="#associe-se">associe-se</a></li>
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
            Associazione Internazionale Studi di Canto Gregoriano.
          </p>
          <p class="foot__credits">
            Imagem do Codex Einsiedeln 121, p. 30:
            <a href="https://www.e-codices.unifr.ch/en/sbe/0121/30" target="_blank" rel="noopener">Stiftsbibliothek Einsiedeln / e-codices</a>,
            sob licença
            <a href="https://creativecommons.org/licenses/by/3.0/deed.pt" target="_blank" rel="noopener">CC&nbsp;BY&nbsp;3.0</a>.
            Foto da diretoria:
            <a href="https://www.instagram.com/beatrizclleal/" target="_blank" rel="noopener">@beatrizclleal</a>.
          </p>
        </div>
        <p class="foot__colophon">MMXXVI · laus deo</p>
      </div>
    </footer>
  </div>
</template>
