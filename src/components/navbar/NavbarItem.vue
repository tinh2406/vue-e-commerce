<template>
  <div class="nav-item cursor-pointer" v-if="isAuthenticated">
    <router-link
      class="p-2 rounded-md hover:bg-gray-100 text-lg"
      :class="{ active: isActiveRoute(routeName) }"
      :to="{ name: routeName }"
      aria-current="page"
    >
      {{ label }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

interface Props {
  routeName: string
  label: string
  roles?: number[]
}

const props = defineProps<Props>()

const authStore = useAuthStore()

const isAuthenticated = computed(() => {
  if (!props.roles) return true

  const userRole = authStore.user?.role
  console.log('🚀 ~ isAuthenticated ~ userRole', userRole)

  if (!userRole) return false

  return props.roles.includes(userRole)
})

const route = useRoute()

const isActiveRoute = (path: string) => route.name === path
</script>
