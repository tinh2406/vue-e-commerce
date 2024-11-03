<template>
  <div class="p-4 container grid grid-cols-5 gap-4">
    <div
      style="scrollbar-width: none"
      class="col-span-1 h-full sticky top-24 overflow-x-hidden overflow-y-scroll max-h-[calc(100dvh-8rem)] bg-white rounded-md"
    >
      <CategoryList />
    </div>
    <!-- Featured Products -->
    <div class="col-span-4 bg-white rounded-md mt-20">
      <ProductListView />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductListView from './products/ListView.vue'
import CategoryList from './products/components/CategoryList.vue'
</script>
