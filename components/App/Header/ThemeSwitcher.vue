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
    class="inline-flex h-8 w-14 items-center rounded-full border bg-transparent p-0.5 outline-none transition-colors duration-200 ease-in-out hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-800"
    :class="darkMode ? 'border-gray-400' : 'border-gray-500'"
    @update:model-value="setTheme"
  >
    <span class="sr-only">Use setting</span>
    <span
      aria-hidden="true"
      :class="darkMode ? 'translate-x-6' : 'translate-x-0.5'"
      class="pointer-events-none inline-grid h-6 w-6 transform place-items-center rounded-full bg-transparent ring-0 transition duration-200 ease-in-out"
    >
      <ClientOnly>
        <Icon
          :name="darkMode ? 'ph:sun-fill' : 'ph:moon-fill'"
          class="transition duration-200 ease-in-out"
          :class="
            darkMode ? 'rotate-180 text-yellow-500' : 'rotate-0 text-gray-900'
          "
          size="24"
        />
      </ClientOnly>
    </span>
  </HeadlessSwitch>
</template>
