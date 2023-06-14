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
  @apply ml-auto mr-auto max-w-[1440px] pl-5 pr-5;
}
</style>
