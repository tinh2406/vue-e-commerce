<template>
  <label class="font-semibold text-xl"> Product filter </label>
  <div class="flex gap-4 justify-end items-center">
    <div class="relative items-center gap-2">
      <button
        class="font-semibold text-lg"
        v-on:click="togglePriceExpand"
        aria-haspopup="true"
        aria-expanded="true"
      >
        Price: <span class="font-normal">{{ price_text }}</span>
      </button>
      <div
        class="absolute right-0 w-48 h-0 overflow-hidden bg-white border-gray-200 rounded-md shadow-lg z-10"
        :class="{ 'h-fit': price_expand }"
      >
        <div class="transition-all h-0 overflow-hidden m-2" :class="{ 'h-[76px]': price_expand }">
          <div class="flex flex-col gap-2">
            <input
              placeholder="From"
              v-model="price_from"
              @input="handlePriceFromInput"
              class="border border-gray-100 rounded-md px-2 py-1 text-right"
            />
            <input
              placeholder="To"
              v-model="price_to"
              @input="handlePriceToInput"
              class="border border-gray-100 rounded-md px-2 py-1 text-right"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="relative text-left flex">
      <div class="flex items-center gap-2">
        <label class="font-semibold text-lg">Sort by:</label>
        <button
          type="button"
          class="border border-gray-100 rounded-md w-24 px-2 py-1 bg-white inline-flex items-center justify-center"
          aria-haspopup="true"
          aria-expanded="true"
          v-on:click="toggleSortExpand"
        >
          <span class="mr-2 capitalize">{{ productStore.query.order_by || 'Default' }}</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
      </div>
      <div class="flex items-center" @click="toggleOrderType">
        <svg
          v-if="productStore.query.order_type === 'desc'"
          class="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2L3.5 13h17L12 2zm0 14c-1.1 0-2 .9-2 2v2h4v-2c0-1.1-.9-2-2-2z" />
        </svg>
        <svg v-else class="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 22l8.5-11h-17L12 22zm0-14c1.1 0 2-.9 2-2V4h-4v2c0 1.1.9 2 2 2z" />
        </svg>
      </div>

      <!-- Dropdown Popover -->
      <div
        class="absolute right-0 mt-8 w-48 h-0 overflow-hidden bg-white border-gray-200 rounded-md shadow-lg z-10"
        :class="{ 'h-fit': sort_expand }"
      >
        <div
          class="py-1 border"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <button
            class="flex items-center px-4 py-2 w-full text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
            v-on:click="odderBy(undefined)"
          >
            <span>Default</span>
          </button>
          <button
            class="flex items-center px-4 py-2 w-full text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
            v-on:click="odderBy('name')"
          >
            <span>Name</span>
          </button>
          <button
            class="flex items-center px-4 py-2 w-full text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
            v-on:click="odderBy('price')"
          >
            <span>Price</span>
          </button>
        </div>
      </div>
    </div>
    <div class="flex items-center">
      <button
        class="text-blue-500 font-semibold mr-2 px-2 rounded-md hover:bg-gray-100"
        v-on:click="applyClick"
      >
        Apply
      </button>
      <button class="font-light text-gray-600 mr-2 hover:text-gray-900" v-on:click="clearClick">
        Clear
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useProductStore } from '@/stores'
import { computed, ref } from 'vue'

const price_expand = ref(false)
const sort_expand = ref(false)
const price_from = ref<string>()
const price_to = ref<string>()

const productStore = useProductStore()

const togglePriceExpand = () => {
  price_expand.value = !price_expand.value
}
const toggleSortExpand = () => {
  sort_expand.value = !sort_expand.value
}
const odderBy = (order_by: string | undefined) => {
  productStore.query.order_by = order_by
  sort_expand.value = false
}
const toggleOrderType = () => {
  productStore.query.order_type = productStore.query.order_type === 'asc' ? 'desc' : 'asc'
}
const clearClick = () => {
  price_from.value = undefined
  price_to.value = undefined
  price_expand.value = false
  sort_expand.value = false
  productStore.setQuery({
    ...productStore.query,
    price_from: undefined,
    price_to: undefined,
    order_by: undefined,
    order_type: undefined,
    category_id: undefined
  })
}
const applyClick = () => {
  price_expand.value = false
  sort_expand.value = false
  productStore.setQuery({
    ...productStore.query,
    price_from: price_from.value ? parseInt(price_from.value) : undefined,
    price_to: price_to.value ? parseInt(price_to.value) : undefined
  })
}

const handlePriceFromInput = () => {
  let price = undefined
  if (price_from.value && Number.isInteger(parseInt(price_from.value))) {
    price = parseInt(price_from.value)
    price = `${price}`
  }

  price_from.value = price
}
const handlePriceToInput = () => {
  let price = undefined
  if (price_to.value && Number.isInteger(parseInt(price_to.value))) {
    price = parseInt(price_to.value)
    price = `${price}`
  }

  price_to.value = price
}

const price_text = computed(() => {
  return price_from.value && price_to.value
    ? `${price_from.value} - ${price_to.value}`
    : price_from.value
      ? `From: ${price_from.value}`
      : price_to.value
        ? `To: ${price_to.value}`
        : 'All'
})
</script>
