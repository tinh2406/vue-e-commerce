<template>
  <div class="xl:w-[96rem] mx-auto pt-28">
    <div class="text-lg">
      <router-link class="font-semibold" to="/">Home</router-link>
      <span class="mx-1">/</span>
      <span>Products / {{ product?.name }}</span>
    </div>
    <div class="container mt-2 grid grid-cols-10 gap-4">
      <div class="col-span-7 grid grid-cols-7 gap-4">
        <div class="col-span-3">
          <div class="bg-white round-md p-3 sticky top-24">
            <div class="border border-gray-200 rounded-md">
              <img
                v-if="product"
                :src="displayImage"
                :alt="product.name"
                class="w-full h-auto rounded-md"
              />
            </div>
            <div class="w-full mt-4 flex gap-2 overflow-x-auto" style="scrollbar-width: none">
              <img
                v-for="image in product?.images"
                :key="image"
                :src="image"
                :alt="image"
                class="w-16 h-16 p-2 border border-gray-200 object-contain rounded-md cursor-pointer"
                :class="{ 'bg-blue-100': displayImage === image }"
                @click="changeDisplayImage(image)"
              />
            </div>
          </div>
        </div>
        <div class="col-span-4 flex flex-col gap-3">
          <div class="bg-white rounded-md p-4">
            <h2 class="text-2xl font-medium">{{ product?.name }}</h2>

            <div class="mt-4" v-for="attribute in attributes">
              <h3 class="text-md font-bold">{{ attribute }}</h3>
              <ul class="mt-2 grid grid-cols-4 gap-2">
                <div
                  class="border-2 rounded-md px-2 py-1 cursor-pointer"
                  :class="{
                    'border-blue-500 text-blue-500': variant?.attributes[attribute] === value,
                    'border-gray-200': variant?.attributes[attribute] !== value
                  }"
                  v-for="value in product?.attributes?.[attribute]"
                  :key="value"
                  @click="changeVariant({ [attribute]: value })"
                >
                  {{ value }}
                </div>
              </ul>
            </div>
            <div class="mt-8 flex gap-2 items-end justify-between">
              <div class="flex gap-2 items-end">
                <span
                  v-if="variant ? variant.hot_price : product?.hot_price"
                  class="text-xl text-blue-500"
                  >{{ formatCurrency(variant?.hot_price || product?.hot_price) }}</span
                >
                <span
                  :class="{
                    'line-through font-light': variant?.hot_price || product?.hot_price,
                    'text-lg font-bold text-blue-500': !variant?.hot_price || !product?.hot_price
                  }"
                  >{{ formatCurrency(variant?.price || product?.price) }}</span
                >
              </div>
              <svg
                v-if="is_favorite"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="28"
                height="28"
                fill="red"
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="red"
                stroke-width="2"
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
            </div>
          </div>
          <div class="bg-white rounded-md p-4">
            <h2 class="text-2xl font-bold">Description</h2>
            <p :class="{ 'line-clamp-4': !descriptionExpanded }" class="mt-2">
              {{ product?.description }}
            </p>
            <button @click="toggleDescription" class="mt-2 text-blue-500 hover:underline">
              {{ descriptionExpanded ? 'Show less' : 'Show more' }}
            </button>
          </div>
        </div>
        <div class="col-span-7 bg-white"></div>
      </div>
      <div class="col-span-3">
        <div class="bg-white rounded-md p-4 sticky top-24 flex flex-col gap-2">
          <h2 class="text-2xl font-bold">Add to cart</h2>
          <div class="flex gap-2 items-center">
            <img
              :src="product?.thumbnail"
              :alt="product?.thumbnail"
              class="w-12 h-12 rounded-md p-1 border border-gray-200"
            />
            <label class="flex-1 text-lg font-medium">{{
              formatAttribute(variant?.attributes)
            }}</label>
          </div>
          <label class="flex-1 text-lg font-medium">Quantity</label>
          <div class="flex gap-2 items-center">
            <button
              class="w-16 p-1 text-2xl border border-gray-200 rounded-md"
              @click="decreaseQuantity"
              :disabled="parseInt(quantity) <= 1"
            >
              -
            </button>
            <input
              class="w-16 p-2 border border-gray-200 rounded-md text-right"
              v-model="quantity"
              @input="validateInput"
            />
            <button
              class="w-16 p-1 text-2xl border border-gray-200 rounded-md"
              @click="increaseQuantity"
            >
              +
            </button>
          </div>
          <label class="flex-1 text-lg font-medium">Total</label>
          <span class="text-lg font-bold text-blue-500">{{ total }}</span>
          <button class="w-full p-2 bg-blue-500 text-white rounded-md">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import { formatCurrency } from '@/helpers'
import { getProductById } from '@/services/product.service'
import { type Product } from '@/services'
import { useProductStore } from '@/stores'
import BaseHeader from '@/components/BaseHeader.vue'

const route = useRoute()

const productStore = useProductStore()

const product = ref<Product | undefined>(productStore.data.find((p) => p.id === route.params.slug))
const is_favorite = ref(false)
const attributes = computed(() => Object.keys(product.value?.attributes || '{}'))

const displayImage = ref(product.value?.thumbnail)
const changeDisplayImage = (image: string) => {
  displayImage.value = image
}

const variant = ref(product.value?.variants?.[0])
const changeVariant = (_variant: Record<string, string>) => {
  const newAttr = { ...variant.value?.attributes, ..._variant }
  variant.value = product.value?.variants?.find((v) => {
    return Object.keys(newAttr).every((key) => v.attributes[key] === newAttr[key])
  })
  displayImage.value = variant.value?.image || product.value?.thumbnail
}

const descriptionExpanded = ref(false)
const toggleDescription = () => {
  descriptionExpanded.value = !descriptionExpanded.value
}

const quantity = ref('1')
const increaseQuantity = () => {
  quantity.value = (parseInt(quantity.value) + 1).toString()
}
const decreaseQuantity = () => {
  quantity.value = (parseInt(quantity.value) - 1).toString()
}

const validateInput = () => {
  let value = undefined
  if (quantity.value && Number.isInteger(parseInt(quantity.value))) {
    value = parseInt(quantity.value)
    value = `${value}`
  }
  quantity.value = value || '1'
}

watch(product, (newProduct) => {
  if (newProduct) {
    displayImage.value = newProduct.thumbnail || ''
    variant.value = newProduct.variants?.[0]
  }
})

const formatAttribute = (attributes?: Record<string, string>) => {
  if (!attributes) return product.value?.name
  return Object.values(attributes).join(' - ')
}

const total = computed(() => {
  const price =
    variant?.value?.hot_price ||
    variant.value?.price ||
    product.value?.hot_price ||
    product.value?.price ||
    0
  return formatCurrency(price * parseInt(quantity.value))
})

onMounted(async () => {
  try {
    const slug = route.params.slug
    if (typeof slug === 'string') {
      product.value = await getProductById(slug)
    } else {
      console.error('Invalid slug:', slug)
    }
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})
</script>

<style scoped>
.line-clamp-4 {
  display: -webkit-box;
  line-clamp: 16;
  -webkit-line-clamp: 16;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
