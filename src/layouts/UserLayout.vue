<script setup lang="ts"></script>

<template>
  <div class="mx-auto lg:w-[96rem] container grid grid-cols-6 pt-24">
    <aside class="hidden py-4 md:block col-span-1">
      <div class="sticky flex flex-col gap-2 p-4 text-sm top-28">
        <h2 class="pl-3 mb-4 text-2xl font-semibold">Settings</h2>
        <router-link
          to="/user"
          class="flex items-center px-3 py-2.5 border border-white rounded-full font-semibold hover:text-indigo-900  hover:border-indigo-900"
        >
          Pubic Profile
        </router-link>
        <router-link
          to="/user/account"
          class="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 border rounded-full border-white hover:border-indigo-900"
        >
          Account Settings
        </router-link>
        <router-link
          to="/user/history-activity"
          class="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 border rounded-full border-white hover:border-indigo-900"
        >
          History & Activity
        </router-link>
        <router-link
          to="/user/notifications"
          class="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 border rounded-full border-white hover:border-indigo-900"
        >
          Notifications
        </router-link>
        <button
          class="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 border rounded-full border-white hover:border-indigo-900"
        >
          Logout
        </button>
      </div>
    </aside>
    <main class="w-full col-span-5">
      <router-view />
    </main>
  </div>
</template>
