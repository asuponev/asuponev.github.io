<script lang="ts" setup>
interface ModalProps {
  isOpen: boolean
  closeModal: () => void
  title?: string
}

defineProps<ModalProps>()

const closeButtonRef = ref<HTMLButtonElement | null>(null)
</script>

<template>
  <HeadlessTransitionRoot
    appear
    :show="isOpen"
    as="template"
  >
    <HeadlessDialog
      :initialFocus="closeButtonRef"
      as="div"
      class="relative z-50"
      @close="closeModal"
    >
      <HeadlessTransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-70" />
      </HeadlessTransitionChild>
      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <HeadlessTransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-0"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-0"
          >
            <HeadlessDialogPanel
              class="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 transition-all dark:bg-gray-900"
            >
              <div class="mb-4 flex items-center justify-between">
                <h2 class="heading-h2">{{ title }}</h2>
                <UIButton
                  ref="closeButtonRef"
                  class="p-1"
                  @click="closeModal"
                >
                  <Icon
                    name="ph:x"
                    size="32"
                    class="text-gray-900 transition-colors duration-200 dark:text-gray-100"
                  />
                </UIButton>
              </div>
              <slot />
            </HeadlessDialogPanel>
          </HeadlessTransitionChild>
        </div>
      </div>
    </HeadlessDialog>
  </HeadlessTransitionRoot>
</template>
