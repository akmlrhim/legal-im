<script setup>
import { RouterLink } from 'vue-router'
import RichText from './RichText.vue'
import { pathFor } from '../content/index.js'

defineProps({
  blocks: { type: Array, required: true },
  locale: { type: String, required: true },
})
</script>

<template>
  <template v-for="(block, i) in blocks" :key="i">
    <p v-if="block.t === 'p'" class="doc-p">
      <RichText :text="block.text" />
    </p>

    <p v-else-if="block.t === 'lede'" class="doc-lede">
      <RichText :text="block.text" />
    </p>

    <h3 v-else-if="block.t === 'h'" class="doc-h3">{{ block.text }}</h3>

    <ul v-else-if="block.t === 'ul'" class="doc-list">
      <li v-for="(item, j) in block.items" :key="j">
        <RichText :text="item" />
      </li>
    </ul>

    <ol v-else-if="block.t === 'ol'" class="doc-list doc-list--num">
      <li v-for="(item, j) in block.items" :key="j">
        <RichText :text="item" />
      </li>
    </ol>

    <dl v-else-if="block.t === 'dl'" class="doc-dl">
      <div v-for="([term, desc], j) in block.items" :key="j">
        <dt>{{ term }}</dt>
        <dd><RichText :text="desc" /></dd>
      </div>
    </dl>

    <div v-else-if="block.t === 'table'" class="doc-tablewrap" tabindex="0">
      <table class="doc-table">
        <thead>
          <tr>
            <th v-for="(h, j) in block.head" :key="j" scope="col">{{ h }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, j) in block.rows" :key="j">
            <td v-for="(cell, k) in row" :key="k">
              <RichText :text="cell" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <aside v-else-if="block.t === 'note'" class="doc-note">
      <RichText :text="block.text" />
    </aside>

    <dl v-else-if="block.t === 'contact'" class="doc-contact">
      <div v-for="([label, value], j) in block.lines" :key="j">
        <dt>{{ label }}</dt>
        <dd><RichText :text="value" /></dd>
      </div>
    </dl>

    <p v-else-if="block.t === 'docLink'" class="doc-p">
      <RouterLink class="doc-inline-link" :to="pathFor(block.to, locale)">
        {{ block.text }}
        <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
          <path
            d="M4 12L12 4M12 4H6M12 4v6"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </RouterLink>
    </p>
  </template>
</template>
