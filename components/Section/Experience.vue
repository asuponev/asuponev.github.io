<script lang="ts" setup>
import SectionLayout from '~/layouts/SectionLayout.vue'
import { IExperience } from '~/types'

defineProps<{ data: IExperience[] }>()
</script>

<template>
  <SectionLayout>
    <h2 class="heading-h2">Experience</h2>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      <div
        class="min-h-[220px] rounded-lg border border-dashed border-gray-200 bg-transparent p-4 dark:border-gray-700"
      >
        <p class="text-gray-500 dark:text-gray-400">Open for collaboration</p>
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
  </SectionLayout>
</template>
