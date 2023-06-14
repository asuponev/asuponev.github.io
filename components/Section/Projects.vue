<script lang="ts" setup>
import SectionLayout from '~/layouts/SectionLayout.vue'
import { IProject } from '~/types'

defineProps<{ data: IProject[] }>()
</script>

<template>
  <SectionLayout>
    <h2 class="mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-100">
      Projects
    </h2>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div
        v-for="item in [...data].reverse()"
        :key="item.id"
        class="overflow-hidden rounded-lg bg-gray-50 shadow-lg shadow-gray-200 dark:bg-gray-800 dark:shadow-gray-950"
      >
        <div class="h-[256px]">
          <img
            :src="item.cover"
            :alt="`${item.title} cover`"
            class="h-full w-full object-cover"
          />
        </div>
        <div class="flex flex-col justify-between p-4">
          <h3
            class="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100"
          >
            {{ item.title }}
          </h3>
          <p class="mb-4 h-[72px] text-gray-800 dark:text-gray-200">
            {{ item.description }}
          </p>
          <p class="mb-4 h-[48px] text-gray-800 dark:text-gray-200">
            {{ item.note }}
          </p>
          <div class="flex flex-wrap">
            <div
              v-for="skill in item.skills"
              :key="skill"
              class="mb-2 mr-2 grid place-items-center rounded-lg bg-gray-50 p-2 text-gray-900 shadow-md shadow-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:shadow-gray-900"
            >
              {{ skill }}
            </div>
          </div>
          <div class="mt-4 flex items-center justify-between">
            <a
              :href="item.git"
              target="_blank"
              class="text-blue-600 transition-colors duration-200 hover:text-blue-400"
            >
              Code on GitHub
            </a>
            <a
              :href="item.deploy"
              target="_blank"
              class="text-blue-600 transition-colors duration-200 hover:text-blue-400"
            >
              Live demo
            </a>
          </div>
        </div>
      </div>
    </div>
  </SectionLayout>
</template>
