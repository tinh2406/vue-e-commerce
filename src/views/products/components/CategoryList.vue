<template>
  <aside class="col-span-1 bg-white rounded-md overflow-x-hidden overflow-y-auto">
    <div class="p-4">
      <h2 class="text-xl font-semibold">Categories</h2>
      <input
        v-model="keyword"
        type="text"
        class="border border-gray-200 rounded-md w-full px-2 py-1 mt-2"
        placeholder="Search category"
      />
      <ul class="mt-2 w-full">
        <li class="py-2">
          <button
            class="text-gray-600 hover:text-primary hover:underline"
            :class="{ 'text-primary': !productStore.query.category_id }"
            @click="filterByCategory()"
          >
            All
          </button>
        </li>
        <li
          class="w-full"
          v-for="category in categories"
          :key="category.id"
          @click="filterByCategory(category.id)"
        >
          <button
            href="#!"
            class="text-gray-600 hover:text-primary truncate py-2 w-full text-left hover:underline"
            :class="{ 'text-primary': productStore.query.category_id === category.id }"
          >
            {{ category.name }}
          </button>
        </li>
        <LoadMoreOnShow :store="categoryStore" />
      </ul>
    </div>
  </aside>
</template>
<script setup lang="ts">
import LoadMoreOnShow from '@/components/LoadMoreOnShow.vue'
import { useProductStore } from '@/stores'
import { useCategoryStore } from '@/stores/category'
import { debounce } from 'lodash'
import { computed, ref, watch } from 'vue'
const categoryStore = useCategoryStore()
const productStore = useProductStore()

const keyword = ref('')

const filterByCategory = (categoryId?: string) => {
  productStore.setQuery({
    ...productStore.query,
    category_id: categoryId || undefined
  })
}

// Tạo hàm debouncedSearch
const debouncedSearch = debounce(() => {
  categoryStore.setQuery({
    ...categoryStore.query,
    keyword: keyword.value
  })
}, 300) // Thay đổi thời gian debounce (300ms) theo nhu cầu

// Theo dõi thay đổi của keyword để gọi debouncedSearch
watch(keyword, () => {
  debouncedSearch()
})

const categories = computed(() => categoryStore.data)
</script>
