<script lang="ts" setup>
import SectionLayout from '~/layouts/SectionLayout.vue'
import { IExperience } from '~/types'

defineProps<{ data: IExperience[] }>()

const isOpen = ref<boolean>(false)

const closeModal = (): void => {
  isOpen.value = false
}

const openModal = (): void => {
  isOpen.value = true
}
</script>

<template>
  <SectionLayout>
    <h2 class="heading-h2 mb-6">Experience</h2>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      <div
        class="relative flex min-h-[220px] items-center justify-center rounded-lg border border-dashed border-gray-200 bg-transparent p-4 dark:border-gray-700"
      >
        <span class="absolute left-4 top-4 text-gray-500 dark:text-gray-400">
          Open for collaboration
        </span>
        <button
          type="button"
          class="cursor-pointer rounded-lg bg-gray-50 p-4 font-semibold text-gray-900 transition-colors duration-200 hover:bg-gray-200 focus:outline-none dark:bg-gray-800 dark:text-gray-100 lg:hover:bg-gray-200 lg:dark:hover:bg-gray-700"
          @click="openModal()"
        >
          DO YOU HAVE A OFFER?
        </button>
      </div>
      <div
        v-for="item in [...data].reverse()"
        :key="item.id"
        class="custom-card p-4"
      >
        <div class="flex flex-col">
          <div class="flex justify-between">
            <p class="text-gray-500 dark:text-gray-400">{{ item.date }}</p>
            <p class="text-gray-900 dark:text-gray-100">{{ item.company }}</p>
          </div>
          <h3 class="heading-h3 my-4 min-h-[60px]">
            {{ item.position }}
          </h3>
          <p class="min-h-[72px] text-gray-800 dark:text-gray-200">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
    <ModalTemplate
      :isOpen="isOpen"
      :closeModal="closeModal"
      title="Send me an offer"
    >
      <FormFeedback class="mb-5 mt-10" />
    </ModalTemplate>
  </SectionLayout>
</template>
