<script lang="ts" setup>
const colorMode = useColorMode()
const darkMode = ref(colorMode.preference === 'dark')

const setTheme = () => {
  colorMode.preference = darkMode.value ? 'dark' : 'light'
}
</script>

<template>
  <HeadlessSwitch
    v-model="darkMode"
    class="transition-borders inline-flex h-8 w-14 items-center rounded-full border border-gray-100 border-opacity-70 bg-transparent p-0.5 outline-none transition-colors duration-200 ease-in-out hover:border-opacity-100 hover:bg-gray-100 hover:bg-opacity-30 focus:outline-none dark:border-gray-700 dark:hover:bg-gray-800"
    @update:model-value="setTheme"
  >
    <span class="sr-only">Use setting</span>
    <span
      aria-hidden="true"
      :class="darkMode ? 'translate-x-6' : 'translate-x-0.5'"
      class="pointer-events-none inline-grid h-6 w-6 transform place-items-center rounded-full bg-transparent ring-0 transition duration-200 ease-in-out"
    >
      <Icon
        :name="darkMode ? 'ph:sun-fill' : 'ph:moon-fill'"
        class="rotate-0 text-gray-900 transition duration-200 ease-in-out dark:rotate-180 dark:text-yellow-500"
        size="24"
      />
    </span>
  </HeadlessSwitch>
</template>
