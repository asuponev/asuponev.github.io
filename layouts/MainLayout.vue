<script lang="ts" setup></script>

<template>
  <ClientOnly>
    <AppHeader />
  </ClientOnly>
  <main class="bg-white dark:bg-gray-900">
    <div class="container">
      <slot />
    </div>
  </main>
  <ClientOnly>
    <AppFooter />
  </ClientOnly>
</template>
