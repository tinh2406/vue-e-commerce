<template>
  <div
    class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"
  >
    <h3 class="mb-4 text-xl font-semibold dark:text-white">General information</h3>
    <form action="#">
      <div class="grid grid-cols-6 gap-6">
        <div class="col-span-6 sm:col-span-3">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Name</label
          >
          <input
            type="text"
            name="name"
            id="name"
            :v-model="profile?.name"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Bonnie"
            required
          />
        </div>
        <div class="col-span-6 sm:col-span-3">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Email</label
          >
          <input
            type="email"
            name="email"
            id="email"
            disabled
            :v-model="profile?.email"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="example@company.com"
            required
          />
        </div>
        <div class="col-span-6 sm:col-span-3">
          <label
            for="phone-number"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Phone Number</label
          >
          <input
            type="text"
            name="phone-number"
            id="phone-number"
            :v-model="profile?.phone"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="e.g. +(12)3456 789"
            required
          />
        </div>
        <div class="col-span-6 sm:col-span-3">
          <label for="birthday" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Birthday</label
          >
          <input
            type="date"
            name="birthday"
            id="birthday"
            :v-model="profile?.birthday"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required
          />
        </div>
        <div class="col-span-6 sm:col-span-3">
          <label for="gender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Gender</label
          >
          <input
            type="text"
            name="gender"
            id="gender"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required
          />
        </div>
        <div class="col-span-6 sm:col-span-3">
          <label for="role" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Role</label
          >
          <input
            type="text"
            name="role"
            id="role"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="React Developer"
            required
          />
        </div>
        <div class="col-span-6 sm:col-span-3">
          <label
            for="created-at"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Created at</label
          >
          <input
            type="text"
            name="created-at"
            :value="created_at"
            disabled
            id="created-at"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Null"
            required
          />
        </div>
        <div class="col-span-6 sm:col-span-3">
          <label
            for="updated-at"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Updated at</label
          >
          <input
            type="text"
            disabled
            name="updated-at"
            :value="updated_at"
            id="updated-at"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Null"
            required
          />
        </div>
        <div class="col-span-6 sm:col-span-3">
          <label for="ban-at" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Ban at</label
          >
          <input
            type="text"
            name="ban-at"
            disabled
            :value="banned_at"
            id="ban-at"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Null"
            required
          />
        </div>
        <div class="col-span-6 sm:col-span-3">
          <label
            for="deleted-at"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Deleted at</label
          >
          <input
            type="text"
            :value="deleted_at"
            name="deleted-at"
            disabled
            id="deleted-at"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Null"
            required
          />
        </div>
        <div class="col-span-6 sm:col-full">
          <button
            class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            type="submit"
          >
            Save all
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
import { type UserProfile } from '@/services'
import { computed } from 'vue'

const { profile } = defineProps<{
  profile: UserProfile
}>()

const emit = defineEmits(['update-state'])

const editProfile = (profile: UserProfile) => {
  emit('update-state', profile)
}

const created_at = computed(() => {
  if (!profile?.created_at) return 'Null'

  return new Date(profile.created_at).toLocaleString()
})

const updated_at = computed(() => {
  if (!profile?.updated_at) return 'Null'

  return new Date(profile.updated_at).toLocaleString()
})

const deleted_at = computed(() => {
  if (!profile?.deleted_at) return 'Null'

  return new Date(profile.deleted_at).toLocaleString()
})

const banned_at = computed(() => {
  if (!profile?.banned_at) return 'Null'

  return new Date(profile.banned_at).toLocaleString()
})

const onSave = async (e: Event) => {
  e.preventDefault()
  const target = e.target as HTMLFormElement
  const formData = new FormData(target)
  const data = Object.fromEntries(formData.entries())
  console.log(data)
}
</script>
