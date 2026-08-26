<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: { type: String, required: true },
})

const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\])/g

const segments = computed(() =>
  props.text
    .split(TOKEN)
    .filter(Boolean)
    .map((chunk) => {
      if (chunk.startsWith('**') && chunk.endsWith('**')) {
        return { kind: 'strong', value: chunk.slice(2, -2) }
      }
      if (chunk.startsWith('[') && chunk.endsWith(']')) {
        return { kind: 'placeholder', value: chunk.slice(1, -1) }
      }
      return { kind: 'text', value: chunk }
    }),
)
</script>

<template>
  <span
    ><template v-for="(seg, i) in segments" :key="i"
      ><strong v-if="seg.kind === 'strong'">{{ seg.value }}</strong
      ><mark
        v-else-if="seg.kind === 'placeholder'"
        class="placeholder"
        :title="'Placeholder: isi di src/content/company.js'"
        >{{ seg.value }}</mark
      ><template v-else>{{ seg.value }}</template>
    </template></span
  >
</template>
