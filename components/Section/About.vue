<script lang="ts" setup>
import SectionLayout from '~/layouts/SectionLayout.vue'
import { IAbout } from '~/types'

defineProps<{ data: IAbout[] }>()
</script>

<template>
  <SectionLayout>
    <div
      class="flex flex-col flex-wrap items-center dark:bg-gray-900 lg:flex-row lg:items-start"
    >
      <div>
        <img
          :src="data[0].photo"
          alt="photo"
          width="200"
          height="200"
          class="rounded-lg"
        />
      </div>
      <div
        class="mx-0 my-3 flex flex-col text-center lg:mx-4 lg:my-0 lg:text-left"
      >
        <p class="text-gray-500 dark:text-gray-400">{{ data[0].position }}</p>
        <h1
          class="mt-2 text-3xl font-semibold text-gray-900 dark:text-gray-100"
        >
          {{ data[0].fullName }}
        </h1>
        <p
          class="mt-4 max-w-[410px] text-center text-gray-800 dark:text-gray-200 lg:text-left"
        >
          {{ data[0].description }}
        </p>
      </div>
      <div class="ml-0 flex flex-col text-center lg:ml-auto lg:text-left">
        <p class="mb-6 text-gray-500 dark:text-gray-400">
          Located in {{ data[0].place.country }}
          <br />
          {{ data[0].place.city }}
        </p>
        <a
          :href="data[0].links.linkedin"
          target="_blank"
          class="text-blue-600 transition-colors duration-200 hover:text-blue-400"
        >
          Linkedin
        </a>
        <a
          :href="data[0].links.telegram"
          target="_blank"
          class="text-blue-600 transition-colors duration-200 hover:text-blue-400"
        >
          Telegram
        </a>
        <a
          :href="`mailto:${data[0].links.email}`"
          target="_blank"
          class="text-blue-600 transition-colors duration-200 hover:text-blue-400"
        >
          Send email
        </a>
        <a
          :href="data[0].links.github"
          target="_blank"
          class="text-blue-600 transition-colors duration-200 hover:text-blue-400"
        >
          GitHub
        </a>
        <a
          :href="data[0].links.codewars"
          target="_blank"
          class="text-blue-600 transition-colors duration-200 hover:text-blue-400"
        >
          Codewars
        </a>
      </div>
    </div>
  </SectionLayout>
</template>
