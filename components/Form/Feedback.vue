<script lang="ts" setup>
const name = ref('')
const contact = ref('')
const message = ref('')
const isLoading = ref(false)

const error = ref<{ type: string; message: string } | null>(null)

const saveValue = (name: string, value: string): void => {
  localStorage.setItem(`form-feedback-${name}`, value)
}

const getSavedValue = (value: string): string => {
  if (localStorage.getItem(value) === null) {
    return ''
  }
  return localStorage.getItem(value)!
}

const clearStorage = () => {
  localStorage.removeItem('form-feedback-name')
  localStorage.removeItem('form-feedback-contact')
  localStorage.removeItem('form-feedback-message')
}

onMounted(() => {
  watchEffect(() => {
    name.value = getSavedValue('form-feedback-name')
    contact.value = getSavedValue('form-feedback-contact')
    message.value = getSavedValue('form-feedback-message')
  })
})

const submit = (): void => {
  error.value = null
  isLoading.value = true

  if (!name.value) {
    isLoading.value = false
    error.value = {
      type: 'name',
      message: 'A contact name is required',
    }
  } else if (!contact.value) {
    isLoading.value = false
    error.value = {
      type: 'contact',
      message: 'An contact is required',
    }
  } else if (!message.value) {
    isLoading.value = false
    error.value = {
      type: 'message',
      message: 'A message is required',
    }
  }

  const body = {
    name: name.value,
    contact: contact.value,
    message: message.value,
  }

  console.log(body)
  clearStorage()
}
</script>

<template>
  <div class="ml-auto mr-auto max-w-xl">
    <h2 class="heading-h2 text-center lg:text-left">Send me a message</h2>
    <ClientOnly>
      <form @submit.prevent="submit()">
        <FormInput
          v-model:input="name"
          name="name"
          class="w-full"
          placeholder="Your name"
          :saveValue="saveValue"
          :error="error && error.type == 'name' ? error.message : ''"
        />

        <FormInput
          v-model:input="contact"
          name="contact"
          class="mt-2 w-full"
          placeholder="Contact (email / telegram / etc.)"
          :saveValue="saveValue"
          :error="error && error.type == 'contact' ? error.message : ''"
        />

        <FormTextarea
          v-model:input="message"
          name="message"
          class="mt-2 w-full"
          placeholder="Your message"
          :saveValue="saveValue"
          :error="error && error.type == 'message' ? error.message : ''"
        />

        <button
          :disabled="isLoading"
          type="submit"
          class="mt-6 w-full rounded-full border-none bg-gray-100 p-1.5 font-semibold text-gray-900 transition-colors duration-200 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
        >
          <div v-if="!isLoading">Send</div>
          <Icon
            v-else
            name="eos-icons:loading"
            size="24"
          />
        </button>
      </form>
    </ClientOnly>
  </div>
</template>
