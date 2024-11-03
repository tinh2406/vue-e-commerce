<template>
  <div class="shadow-sm fixed w-full z-50 bg-white dark:bg-gray-950">
    <BaseHeader />
  </div>
  <RouterView />
</template>
<script setup lang="ts">
import BaseHeader from '@/components/BaseHeader.vue'
</script>
