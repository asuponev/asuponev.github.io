<script lang="ts" setup>
interface Props {
  name: string
  input: string
  placeholder?: string
  inputType?: string
  error?: string
  saveValue?: (name: string, value: string) => void
}
const emit = defineEmits(['update:input'])

const props = defineProps<Props>()
const { name, input, placeholder, inputType, error, saveValue } = toRefs(props)

const inputComputed = computed({
  get: () => input.value,
  set: (value) => emit('update:input', value),
})
</script>

<template>
  <div>
    <input
      v-model="inputComputed"
      :name="name"
      :placeholder="placeholder"
      :type="inputType"
      autocomplete="off"
      class="w-full rounded-lg border border-gray-200 bg-white p-3 text-sm text-gray-900 placeholder-gray-500 focus:border-gray-700 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:focus:border-gray-400"
      :class="error ? 'border-red-500' : ''"
      @keyup="saveValue && saveValue(name, input)"
    />
    <span
      v-if="error"
      class="text-sm font-semibold text-blue-500"
    >
      {{ error }}
    </span>
  </div>
</template>
