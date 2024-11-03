<template>
  <div
    class="flex-grow max-w-4xl items-center border-gray-300 border px-2 rounded-md"
    :class="{ flex: route.fullPath == '/', hidden: route.fullPath != '/' }"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Circle (Lens) -->
      <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" />
      <!-- Handle -->
      <line
        x1="15"
        y1="15"
        x2="20"
        y2="20"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
    <input
      type="text"
      class="w-full h-10 px-2 py-1 text-sm rounded-md focus:outline-none"
      placeholder="Search..."
      v-model="keyword"
    />
    <button class="border-l-2 px-2 hover:text-blue-500" @click="search">Search</button>
  </div>
</template>
<script setup lang="ts">
import { useProductStore } from '@/stores'
import { debounce } from 'lodash'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const productStore = useProductStore()

const keyword = ref('')

const search = () => {
  productStore.setQuery({
    ...productStore.query,
    keyword: keyword.value
  })
}
// Tạo hàm debouncedSearch
const debouncedSearch = debounce(() => {
  productStore.setQuery({
    ...productStore.query,
    keyword: keyword.value
  })
}, 300) // Thay đổi thời gian debounce (300ms) theo nhu cầu

// Theo dõi thay đổi của keyword để gọi debouncedSearch
watch(keyword, () => {
  debouncedSearch()
})
</script>
