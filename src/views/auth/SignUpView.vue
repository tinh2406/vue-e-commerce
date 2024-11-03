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
    <div class="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Create a Free Account</h2>
      <form class="mt-8 space-y-6" @submit.prevent="handleSignup">
        <div>
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your name</label
          >
          <input
            name="name"
            v-model="registerData.name"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="John Smith"
            required
          />
        </div>
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your email</label
          >
          <input
            type="email"
            name="email"
            v-model="registerData.email"
            id="email"
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
            v-model="registerData.password"
            name="password"
            id="password"
            placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required
          />
        </div>
        <div>
          <label
            for="confirm-password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Confirm password</label
          >
          <input
            type="password"
            name="confirm-password"
            v-model="registerData.re_password"
            id="confirm-password"
            placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required
          />
        </div>
        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input
              id="remember"
              aria-describedby="remember"
              name="remember"
              type="checkbox"
              class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>
          <div class="ml-3 text-sm">
            <label for="remember" class="font-medium text-gray-900 dark:text-white"
              >I accept the
              <a href="#" class="text-primary-700 hover:underline dark:text-primary-500"
                >Terms and Conditions</a
              ></label
            >
          </div>
        </div>
        <button
          type="submit"
          class="w-full px-5 py-3 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Create account
        </button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-400">
          Already have an account?
          <router-link to="login" class="text-primary-700 hover:underline dark:text-primary-500"
            >Login here</router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Register } from '@/services'
import { signup } from '@/services/auth.service'
import { useLoadingStore } from '@/stores'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'

const router = useRouter()
const loadingStore = useLoadingStore()

const registerData = ref<Register>({
  email: 'abc@gmail.com',
  password: 'abc',
  name: 'abc',
  re_password: 'abc'
})

const handleSignup = async () => {
  try {
    loadingStore.loading()
    await signup(registerData.value)
    toast.success('Account created successfully!')

    router.push({ name: 'login' })
  } catch (err: any) {
    toast.error(JSON.stringify(err))
  } finally {
    loadingStore.unloading()
  }
}
</script>
