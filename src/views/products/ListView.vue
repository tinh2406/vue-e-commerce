<template>
  <!-- Product Card Grid View -->
  <div class="sticky top-[92px] z-10 bg-white p-2 rounded-md shadow flex justify-between">
    <ProductFilter />
  </div>
  <div class="container min-h-[70vh] mt-2">
    <div class="grid grid-cols-5 gap-4">
      <div v-for="product in products" :key="product.id">
        <ProductCart :product="product" />
      </div>
      <div v-if="!products.length" class="col-span-5 text-center">
        <p class="mt-5 text-lg">No products found</p>
      </div>
    </div>
    <LoadMoreOnShow :store="productStore" />
  </div>
  <BaseFooter />
</template>
<script setup lang="ts">
import { useProductStore } from '@/stores/product'
import { computed } from 'vue'
import ProductCart from './components/ProductCart.vue'
import BaseFooter from '@/components/BaseFooter.vue'
import LoadMoreOnShow from '@/components/LoadMoreOnShow.vue'
import ProductFilter from './components/ProductFilter.vue'

const productStore = useProductStore()

const products = computed(() => productStore.data)
</script>

<style lang="css" scoped>
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
}
</style>
