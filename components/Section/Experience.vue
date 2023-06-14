<script lang="ts" setup>
import SectionLayout from '~/layouts/SectionLayout.vue'
import { IExperience } from '~/types'

defineProps<{ data: IExperience[] }>()
</script>

<template>
  <SectionLayout>
    <h2 class="mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-100">
      Experience
    </h2>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      <div
        class="min-h-[220px] rounded-lg bg-transparent p-4 shadow-lg shadow-gray-200 dark:bg-gray-700 dark:shadow-gray-950"
      >
        <p class="text-gray-500 dark:text-gray-400">Open for collaboration</p>
      </div>
      <div
        v-for="item in [...data].reverse()"
        :key="item.id"
        class="rounded-lg bg-gray-50 p-4 shadow-lg shadow-gray-200 dark:bg-gray-800 dark:shadow-gray-950"
      >
        <div class="flex flex-col">
          <div class="flex justify-between">
            <p class="text-gray-500 dark:text-gray-400">{{ item.date }}</p>
            <p class="text-gray-900 dark:text-gray-100">{{ item.company }}</p>
          </div>
          <h3
            class="my-4 min-h-[60px] text-xl font-semibold text-gray-900 dark:text-gray-100"
          >
            {{ item.position }}
          </h3>
          <p class="min-h-[72px] text-gray-800 dark:text-gray-200">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </SectionLayout>
</template>
