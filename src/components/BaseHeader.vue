<template>
  <nav class="flex justify-between items-center p-4 w-full 2xl:w-[96rem] mx-auto">
    <NavbarBrand />
    <ProductSearch />
    <div class="flex items-center gap-2">
      <NavbarItem
        label="Management"
        :roles="ADMIN_STAFF_ROLE"
        to="/management"
        route-name="management"
      />
      <NavbarCart />
      <NavbarAvatar />
    </div>
  </nav>
</template>

<script setup lang="ts">
import NavbarAvatar from '@/components/navbar/NavbarAvatar.vue'
import NavbarItem from '@/components/navbar/NavbarItem.vue'
import NavbarBrand from '@/components/navbar/NavbarBrand.vue'
import ProductSearch from '@/components/navbar/ProductSearch.vue'
import NavbarCart from '@/components/navbar/NavbarCart.vue'
import { ADMIN_STAFF_ROLE } from '@/helpers'
</script>
