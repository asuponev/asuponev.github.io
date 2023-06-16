<script lang="ts" setup>
interface Props {
  name: string
  input: string
  placeholder?: string
  error?: string
  saveValue?: (name: string, value: string) => void
}
const emit = defineEmits(['update:input'])

const props = defineProps<Props>()
const { name, input, placeholder, error, saveValue } = toRefs(props)

const inputComputed = computed({
  get: () => input.value,
  set: (val) => emit('update:input', val),
})
</script>

<template>
  <div class="flex flex-col">
    <textarea
      v-model="inputComputed"
      :name="name"
      :placeholder="placeholder"
      class="w-full resize-none rounded-lg border border-gray-200 bg-white p-3 text-sm text-gray-900 placeholder-gray-500 focus:border-gray-700 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:focus:border-gray-400 lg:resize-y"
      :class="error ? 'border-red-500' : ''"
      rows="5"
      maxlength="1000"
      autocomplete="off"
      @keyup="saveValue && saveValue(name, input)"
    ></textarea>
    <span
      v-if="error"
      class="self-start text-sm font-semibold text-red-500"
    >
      {{ error }}
    </span>
  </div>
</template>
