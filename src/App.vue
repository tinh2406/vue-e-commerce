<script setup>

import { onMounted } from 'vue';
import { useAuthStore, useCategoryStore, useLoadingStore, useProductStore } from './stores';

import './app.css';

const authStore = useAuthStore()
const productStore = useProductStore()
const categoryStore = useCategoryStore()
const loadingStore = useLoadingStore()


onMounted(async () => {
  await authStore.initializeAuth()
  productStore.fetch()
  categoryStore.fetch()
})
</script>

<template>
  <div class="min-vh-100 bg-gray-50 dark:bg-gray-900 dark:text-white">
    <router-view/>
  </div>
  <div
    v-if="loadingStore.isLoading"
    class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75"
  >
    <div class="loader"></div>
  </div>
</template>
<style scoped>
.loader {
  width: 50px;
  height: 50px;
  border: 5px solid #fff;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
