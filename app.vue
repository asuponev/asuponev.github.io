<script lang="ts" setup>
import MainLayout from '~/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <NuxtPage />
  </MainLayout>
</template>

<style>
#__nuxt {
  @apply flex min-h-screen flex-col;
}

header,
footer {
  @apply shrink-0 grow-0;
}

main {
  @apply grow;
}

.container {
  @apply mx-auto max-w-[1440px] px-5;
}

.heading-h1 {
  @apply text-3xl font-semibold text-gray-900 dark:text-gray-100;
}

.heading-h2 {
  @apply text-2xl font-semibold text-gray-900 dark:text-gray-100;
}

.heading-h3 {
  @apply text-xl font-semibold text-gray-900 dark:text-gray-100;
}

.custom-card {
  @apply rounded-lg border border-gray-100 border-opacity-70 bg-gray-50 dark:border-gray-700 dark:bg-gray-800;
}
</style>
