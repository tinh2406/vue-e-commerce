<template>
  <div class="grid grid-cols-1 px-4 pt-6 xl:grid-cols-5 xl:gap-4 dark:bg-gray-900">
    <div class="mb-2 col-span-full">
      <nav class="flex mb-3" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
          <li class="inline-flex items-center">
            <router-link to="/"
              class="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white">
              <svg class="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
                </path>
              </svg>
              Home
            </router-link>
          </li>
          <li>
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <div class="ml-1 text-gray-700 hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white">
                Users
              </div>
            </div>
          </li>
        </ol>
      </nav>
      <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white p-2">
        User settings
      </h1>
    </div>
    <!-- Right Content -->
    <div class="col-span-full xl:col-span-2">
      <div
        class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        <div class="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
          <AvatarUpload :image="editProfile?.image" :name="editProfile?.name" @update-state="editImage" />
        </div>
      </div>
      <div
        class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        <SocialAccount />
      </div>
    </div>
    <div class="col-span-3">
      <GeneralInfo :profile="editProfile" @update-state="updateState" />
      <div
        class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        <h3 class="mb-4 text-xl font-semibold dark:text-white">Address</h3>
        <form action="#">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
              <input type="text" name="city" id="city"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="e.g. Da Nang" required />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label for="district"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">District</label>
              <input type="text" name="district" id="district"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="e.g. Cam Le" required />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
              <input type="text" name="address" id="address"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="e.g. 460 Nguyen Huu Tho" required />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useAuthStore, useLoadingStore } from '@/stores'
import AvatarUpload from './components/AvatarUpload.vue'
import SocialAccount from './components/SocialAccount.vue'
import GeneralInfo from './components/GeneralInfo.vue'
import type { UserProfile } from '@/services/api'

const authStore = useAuthStore()
const loadingStore = useLoadingStore()
const profile = computed(() => authStore.user)
const editProfile = ref<UserProfile | null>(null)

if (!profile.value) {
  loadingStore.loading()
}

const editImage = (image: string) => {
  if (editProfile.value) {
    editProfile.value.image = image
  }
}

const updateState = (data: Partial<UserProfile>) => {
  console.log(data);
  
  // if (editProfile.value) {
  //   editProfile.value = { ...editProfile.value, ...data }
  // }
}

watch(profile, (newProfile) => {
  if (newProfile) {
    loadingStore.unloading()
    editProfile.value = {
      ...newProfile,
      name: newProfile.name,
      phone: newProfile.phone,
      gender: newProfile.gender,
      birthday: newProfile.birthday,
      image: newProfile.image
    }
  }
})
</script>