<script lang="ts" setup>
const name = ref('')
const contact = ref('')
const message = ref('')

const isLoading = ref(false)
const isSuccess = ref(false)
const isError = ref(false)

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

const clearForm = () => {
  localStorage.removeItem('form-feedback-name')
  localStorage.removeItem('form-feedback-contact')
  localStorage.removeItem('form-feedback-message')

  name.value = ''
  contact.value = ''
  message.value = ''
}

onMounted(() => {
  watchEffect(() => {
    name.value = getSavedValue('form-feedback-name')
    contact.value = getSavedValue('form-feedback-contact')
    message.value = getSavedValue('form-feedback-message')
  })
})

const submit = async (): Promise<void> => {
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

  const values = {
    name: name.value,
    contact: contact.value,
    message: message.value,
  }

  if (!error.value) {
    const { data } = await useFetch('/api/feedback', {
      method: 'POST',
      body: values,
    })

    if (data.value) {
      isLoading.value = false
      isSuccess.value = true
      clearForm()
    } else {
      isLoading.value = false
      isError.value = true
    }

    setTimeout(() => {
      isSuccess.value = false
      isError.value = false
    }, 3000)
  }
}
</script>

<template>
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

    <UIButton
      :disabled="isLoading"
      type="submit"
      class="mt-6 h-10 w-full"
    >
      <span v-if="!isLoading && !isSuccess && !isError">Send</span>
      <Icon
        v-else
        :name="
          isLoading
            ? 'eos-icons:loading'
            : isSuccess
            ? 'material-symbols:done'
            : 'material-symbols:error-outline'
        "
        :class="[{ 'text-green-500': isSuccess }, { 'text-red-500': isError }]"
        size="24"
      />
    </UIButton>
  </form>
</template>
