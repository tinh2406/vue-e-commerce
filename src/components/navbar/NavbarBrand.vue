<template>
  <router-link to="/" class="flex items-center gap-2">
    <img
      :src="LOGO_URL"
      alt="Logo"
      width="36"
      height="36"
      loading="lazy"
    />
    <strong class="hidden lg:block text-lg">E-commerce</strong>
  </router-link>
</template>
<script setup lang="ts">
import {LOGO_URL} from "@/services"
</script>