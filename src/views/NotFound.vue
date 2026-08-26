<script setup>
import { RouterLink } from 'vue-router'
import { defaultLocale, docKeys, pathFor, ui } from '../content/index.js'

const t = ui[defaultLocale]
</script>

<template>
  <div class="page page--center">
    <div class="notfound">
      <img
        class="notfound__mark"
        src="/logo_original.webp"
        width="96"
        height="72"
        alt=""
        decoding="async"
      />
      <p class="notfound__code">404</p>
      <h1 class="notfound__title">Halaman tidak ditemukan</h1>
      <p class="notfound__text">
        Tautan yang Anda buka tidak mengarah ke dokumen mana pun. Berikut
        dokumen yang tersedia:
      </p>
      <nav class="notfound__links" aria-label="Dokumen hukum">
        <RouterLink
          v-for="key in docKeys"
          :key="key"
          :to="pathFor(key, defaultLocale)"
        >
          {{ t.nav[key] }}
        </RouterLink>
      </nav>
    </div>
  </div>
</template>
