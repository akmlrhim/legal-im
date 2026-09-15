<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { company } from '../content/company.js'
import { docKeys, pathFor, ui } from '../content/index.js'

const props = defineProps({
	locale: { type: String, required: true },
})

const t = computed(() => ui[props.locale])
const year = new Date().getFullYear()
</script>

<template>
	<footer class="site-footer">
		<div class="site-footer__inner">
			<div class="site-footer__brand">
				<img class="site-footer__mark" src="/logo_original.webp" width="52" height="39" alt="" loading="lazy"
					decoding="async" />
				<p class="site-footer__name">{{ company.name }}</p>
			</div>

			<nav class="site-footer__nav">
				<RouterLink v-for="key in docKeys" :key="key" :to="pathFor(key, locale)">
					{{ t.nav[key] }}
				</RouterLink>
			</nav>

			<p class="site-footer__copy">
				&copy; {{ year }} {{ company.name }}.
			</p>
		</div>
	</footer>
</template>
