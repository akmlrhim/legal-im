<script setup>
import { computed, ref, watchEffect } from 'vue'
import DocumentBody from '../components/DocumentBody.vue'
import RichText from '../components/RichText.vue'
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import NotFound from './NotFound.vue'
import { countPlaceholders } from '../content/company.js'
import { docKeyForSlug, getDoc, ui } from '../content/index.js'

const props = defineProps({
  locale: { type: String, required: true },
  slug: { type: String, required: true },
})

const t = computed(() => ui[props.locale])
const docKey = computed(() => docKeyForSlug(props.slug, props.locale))
const doc = computed(() => (docKey.value ? getDoc(docKey.value, props.locale) : null))

const placeholderCount = countPlaceholders()
const bannerDismissed = ref(false)

watchEffect(() => {
  if (!doc.value) return
  document.title = `${doc.value.title} | Impost Media Indonesia`
  document.documentElement.lang = t.value.htmlLang
})
</script>

<template>
  <div v-if="doc" id="top" class="page">
    <a class="skiplink" href="#doc-main">{{ t.skipToContent }}</a>
    <Header :locale="locale" :active-doc="docKey" />

    <main id="doc-main" class="page__main">
      <div class="doc-hero">
        <p class="doc-hero__updated">
          {{ t.updated }} <RichText :text="doc.updated" />
        </p>
        <h1 class="doc-hero__title">{{ doc.title }}</h1>
        <p class="doc-hero__summary">{{ doc.summary }}</p>
      </div>

      <div
        v-if="placeholderCount > 0 && !bannerDismissed"
        class="draftbanner"
        role="status"
      >
        <div class="draftbanner__body">
          <p class="draftbanner__title">{{ t.draftTitle }}</p>
          <p class="draftbanner__text">{{ t.draftBody(placeholderCount) }}</p>
        </div>
        <button
          type="button"
          class="draftbanner__close"
          @click="bannerDismissed = true"
        >
          {{ t.draftDismiss }}
        </button>
      </div>

      <article class="doc-body">
        <div class="doc-intro">
          <DocumentBody :blocks="doc.intro" :locale="locale" />
        </div>

        <section
          v-for="(section, i) in doc.sections"
          :id="section.id"
          :key="section.id"
          class="doc-section"
        >
          <h2 class="doc-section__title">
            <span class="doc-section__num" aria-hidden="true">{{ i + 1 }}</span>
            <span>{{ section.title }}</span>
          </h2>
          <DocumentBody :blocks="section.blocks" :locale="locale" />
        </section>

        <p class="doc-totop">
          <a href="#top">{{ t.backToTop }}</a>
        </p>
      </article>
    </main>

    <Footer :locale="locale" />
  </div>

  <NotFound v-else />
</template>
