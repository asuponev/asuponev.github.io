<script lang="ts" setup>
import SectionLayout from '~/layouts/SectionLayout.vue'
import { ISkill } from '~/types'

defineProps<{ data: ISkill[] }>()
</script>

<template>
  <SectionLayout>
    <h2 class="mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-100">
      Skills
    </h2>
    <div class="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-6">
      <div
        v-for="item in data"
        :key="item"
        class="custom-card grid place-items-center p-2 text-gray-900 dark:text-gray-100"
      >
        {{ item }}
      </div>
    </div>
  </SectionLayout>
</template>
