<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { company } from '../content/company.js'
import { docKeys, pathFor, ui } from '../content/index.js'

const props = defineProps({
  locale: { type: String, required: true },
  activeDoc: { type: String, required: true },
})

const t = computed(() => ui[props.locale])
const otherLocale = computed(() => (props.locale === 'id' ? 'en' : 'id'))
</script>

<template>
  <header class="site-header">
    <div class="site-header__inner">
      <RouterLink class="brand" :to="pathFor('privacy', locale)">
        <img
          class="brand__mark"
          src="/logo_original.webp"
          width="40"
          height="30"
          alt=""
          decoding="async"
        />
        <span class="brand__name">
          <span class="brand__word">Impost</span>
          <span class="brand__word brand__word--accent">Media</span>
        </span>
      </RouterLink>

      <nav class="docnav" :aria-label="t.footerNote">
        <RouterLink
          v-for="key in docKeys"
          :key="key"
          class="docnav__link"
          :class="{ 'is-active': key === activeDoc }"
          :to="pathFor(key, locale)"
        >
          {{ t.nav[key] }}
        </RouterLink>
      </nav>

      <RouterLink
        class="langswap"
        :to="pathFor(activeDoc, otherLocale)"
        :title="t.switchTo"
        :aria-label="t.switchTo"
      >
        <span class="langswap__current">{{ t.currentLabel }}</span>
        <span class="langswap__sep" aria-hidden="true">/</span>
        <span class="langswap__other">{{ t.switchLabel }}</span>
      </RouterLink>
    </div>
    <p class="visually-hidden">{{ company.name }}</p>
  </header>
</template>
