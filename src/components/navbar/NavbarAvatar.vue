<template>
  <div
    class="flex relative items-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-gray-700 dark:text-gray-200 cursor-pointer px-2"
    v-on:click="toggleExpand"
  >
    <div class="avatar text-white d-flex justify-center align-items-center me-3">
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        v-if="!isAuthenticated"
      >
        <!-- Background Circle -->
        <circle cx="12" cy="12" r="12" fill="#374151" />

        <!-- Head -->
        <circle cx="12" cy="8" r="4" fill="white" />

        <!-- Body -->
        <path
          d="M6 20c0-3.3137 2.6863-6 6-6s6 2.6863 6 6"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <img v-else-if="profile?.image" :src="profile.image" alt="" />
      <span class="h-8 w-8 rounded-full bg-gray-400" v-else>{{ profile?.name.charAt(0) }}</span>
    </div>
    <div class="text-gray-700 dark:text-gray-400 font-medium relative">Account</div>
    <div
      class="absolute right-0 top-10 w-48 h-0 overflow-hidden bg-white border-gray-200 rounded-md shadow-lg z-20 dark:bg-gray-800"
      :class="{ 'h-fit': isExpanded }"
    >
      <div
        v-if="isAuthenticated"
        class="transition-all h-0 overflow-hidden m-2"
        :class="{ 'h-[80px]': isExpanded }"
      >
        <div class="flex flex-col gap-2">
          <router-link
            to="/user"
            class="text-gray-600 hover:text-primary truncate p-2 rounded-md w-full text-left hover:bg-gray-200"
          >
            Profile
          </router-link>
          <button
            class="text-gray-600 hover:text-primary truncate p-2 w-full rounded-md text-left hover:bg-gray-200"
            v-on:click="logout"
          >
            Logout
          </button>
        </div>
      </div>
      <div
        v-else
        class="transition-all h-0 overflow-hidden m-2 dark:bg-gray-800"
        :class="{ 'h-[80px]': isExpanded }"
      >
        <div class="flex flex-col gap-1">
          <router-link
            to="/login"
            class="text-gray-600 hover:text-primary truncate p-2 rounded-md w-full text-left hover:bg-gray-200"
          >
            Login
          </router-link>
          <router-link
            to="/signup"
            class="text-gray-600 hover:text-primary truncate p-2 w-full rounded-md text-left hover:bg-gray-200"
          >
            Register
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const isExpanded = ref(false)
const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}

const isAuthenticated = computed(() => authStore.isAuthenticated)
const profile = computed(() => authStore.user)
const logout = async () => {
  await authStore.logout() // Assuming you have a logout action in your Pinia store
  router.push({ name: 'login' }) // Redirect to login after logout
}
</script>

<style scoped>
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}

.me-2 {
  margin-right: 0.5rem;
}

.me-3 {
  margin-right: 1rem;
}
</style>
