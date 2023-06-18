<script lang="ts" setup>
import SectionLayout from '~/layouts/SectionLayout.vue'
import { IAbout } from '~/types'

defineProps<{ data: IAbout[] }>()
</script>

<template>
  <SectionLayout>
    <div
      class="flex flex-col flex-wrap items-center lg:flex-row lg:items-start"
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
        class="my-3 ml-0 flex flex-col text-center lg:my-0 lg:ml-4 lg:h-[200px] lg:text-left"
      >
        <p class="text-gray-500 dark:text-gray-400">{{ data[0].position }}</p>
        <h1 class="heading-h1 mt-2">
          {{ data[0].fullName }}
        </h1>
        <p
          class="mt-4 max-w-xl text-center text-gray-800 dark:text-gray-200 lg:mt-auto lg:text-left"
        >
          {{ data[0].description }}
        </p>
      </div>
      <div
        class="ml-0 flex flex-col text-center lg:ml-auto lg:h-[200px] lg:text-left"
      >
        <p class="my-2 text-gray-500 dark:text-gray-400 lg:my-0">
          Located in {{ data[0].place.country }}
          <br />
          {{ data[0].place.city }}
        </p>
        <a
          :href="data[0].links.linkedin"
          target="_blank"
          class="mt-auto text-blue-600 transition-colors duration-200 hover:text-blue-400"
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
    <div class="ml-auto mr-auto mt-10 max-w-xl lg:mt-20">
      <h2 class="heading-h2 mb-6 text-center lg:text-left">
        Send me a message
      </h2>
      <FormFeedback />
    </div>
  </SectionLayout>
</template>
