<script lang="ts" setup>
interface Props {
  disabled?: boolean
  secondary?: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
}

defineProps<Props>()
</script>

<template>
  <button
    :type="type || 'button'"
    class="cursor-pointer rounded-lg font-semibold text-gray-900 transition-colors duration-200 focus:outline-none disabled:cursor-default disabled:opacity-50 disabled:hover:text-gray-900 dark:text-gray-100 dark:disabled:hover:text-gray-100"
    :class="
      secondary
        ? 'hover:text-blue-400 dark:hover:text-blue-600'
        : 'bg-gray-100 dark:bg-gray-800 lg:hover:bg-gray-200 lg:dark:hover:bg-gray-700'
    "
    :disabled="disabled"
  >
    <slot />
  </button>
</template>
