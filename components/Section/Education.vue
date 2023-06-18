<script lang="ts" setup>
import SectionLayout from '~/layouts/SectionLayout.vue'
import { IEducation } from '~/types'

defineProps<{ data: IEducation[] }>()

const isOpen = ref<boolean>(false)
const currentCertificate = ref<string>('')

const closeModal = (): void => {
  isOpen.value = false
  currentCertificate.value = ''
}

const openModal = (item: IEducation): void => {
  isOpen.value = true
  currentCertificate.value = item.certificate
}
</script>

<template>
  <SectionLayout>
    <h2 class="heading-h2 mb-6">Education</h2>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
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
        <div class="mt-4">
          <UIButton
            :secondary="true"
            :disabled="item.certificate === 'none'"
            @click="openModal(item)"
          >
            {{ item.certificate !== 'none' ? 'CERTIFICATE' : 'IN PROGRESS' }}
          </UIButton>
        </div>
      </div>
    </div>
    <UIModal
      :isOpen="isOpen"
      :closeModal="closeModal"
      title="Certificate"
    >
      <img
        :src="currentCertificate"
        alt="certificate"
      />
    </UIModal>
  </SectionLayout>
</template>
