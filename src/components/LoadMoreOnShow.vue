<template>
  <div v-if="store.loading" class="flex justify-center items-center py-4 mx-auto">
    <svg
      class="animate-spin h-5 w-5 text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.963 7.963 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  </div>
  <div
    ref="loadMoreTrigger"
    v-element-visibility="onElementVisibility"
    class="h-4 w-full invisible"
  ></div>
</template>

<script setup lang="ts">
import { type useDataStore } from '@/stores/datastore';
import { vElementVisibility } from '@vueuse/components';
import { ref } from 'vue';
const { store } = defineProps<{ store: ReturnType<useDataStore> }>()

const loadMoreTrigger = ref<HTMLElement | null>(null)

const timeId = ref<number | undefined>(undefined)

function onElementVisibility(state: boolean) {
  if (state && !timeId.value) {
    timeId.value = setInterval(() => {
      if (!store.page_count || store.page <= store.page_count) {
        store.loadNextPage()
      }
    }, 200)
  } else {
    clearInterval(timeId.value)
    timeId.value = undefined
  }
}
</script>
