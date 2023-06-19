<script lang="ts" setup>
import SectionLayout from '~/layouts/SectionLayout.vue'
import { IProject } from '~/types'

defineProps<{ data: IProject[] }>()
</script>

<template>
  <SectionLayout>
    <h2 class="heading-h2 mb-6">Projects</h2>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div
        v-for="item in [...data].reverse()"
        :key="item.id"
        class="custom-card overflow-hidden"
      >
        <div class="h-[256px]">
          <img
            :src="item.cover"
            :alt="`${item.title} cover`"
            class="h-full w-full object-cover"
          />
        </div>
        <div class="flex h-[calc(100%-256px)] flex-col justify-between p-4">
          <h3 class="heading-h3 mb-4">
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
              class="custom-card mb-2 mr-2 grid place-items-center p-2 text-gray-900 dark:text-gray-100"
            >
              {{ skill }}
            </div>
          </div>
          <div class="mt-4 flex items-center justify-between">
            <NuxtLink
              :to="item.git"
              target="_blank"
              class="text-blue-600 transition-colors duration-200 hover:text-blue-400"
            >
              Code on GitHub
            </NuxtLink>
            <NuxtLink
              :to="item.deploy"
              target="_blank"
              class="text-blue-600 transition-colors duration-200 hover:text-blue-400"
            >
              Live demo
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </SectionLayout>
</template>
