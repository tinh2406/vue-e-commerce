<template>
  <div
    class="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900"
  >
    <router-link
      to="/"
      class="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white"
    >
      <img src="http://localhost:8000/static/paradoxlogo.png" class="mr-4 h-11" alt="Logo" />
      <span>E-commerce</span>
    </router-link>
    <!-- Card -->
    <div class="w-full max-w-xl p-6 space-y-8 sm:p-8 rounded-lg shadow dark:bg-gray-800">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Sign in to platform</h2>
      <form class="mt-8 space-y-6 w-full" @submit.prevent="handleLogin">
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your email</label
          >
          <input
            type="email"
            name="email"
            id="email"
            v-model="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="name@company.com"
            required
          />
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your password</label
          >
          <input
            type="password"
            name="password"
            v-model="password"
            id="password"
            placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required
          />
        </div>
        <div class="w-full flex justify-center">
          <button
            type="submit"
            class="flex-grow py-2 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Login to your account
          </button>
        </div>
        <div
          class="w-full flex text-sm font-medium text-gray-500 dark:text-gray-400 justify-between"
        >
          <router-link
            to="reset-password"
            class="text-sm text-primary-700 hover:underline dark:text-primary-500"
            >Lost Password?</router-link
          >
          <span>
            Not registered?
            <router-link to="signup" class="text-primary-700 hover:underline dark:text-primary-500"
              >Create account</router-link
            >
          </span>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore, useLoadingStore } from '@/stores'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'

const router = useRouter()
const authStore = useAuthStore()
const loadingStore = useLoadingStore()

const email = ref('admin@gmail.com')
const password = ref('admin')

const handleLogin = async () => {
  try {
    loadingStore.loading()
    await authStore.login({ email: email.value, password: password.value })
    toast.success('Welcome back!')
    const next = router.currentRoute.value.query.next
      ? String(router.currentRoute.value.query.next)
      : '/'
    if (authStore.isAuthenticated) {
      router.push(next)
    }
  } catch (error) {
    toast.error(error)
  } finally {
    loadingStore.unloading()
  }
}
</script>
