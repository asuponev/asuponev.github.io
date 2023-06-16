<script lang="ts" setup>
import SectionLayout from '~/layouts/SectionLayout.vue'
import { ISkill } from '~/types'

defineProps<{ data: ISkill[] }>()
</script>

<template>
  <SectionLayout>
    <h2 class="heading-h2">Skills</h2>
    <div>
      <div
        v-for="item in data"
        :key="item.category"
      >
        <h3 class="heading-h3 mb-2">
          {{ item.category }}
        </h3>
        <div class="mb-6 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-6">
          <div
            v-for="skill in item.items"
            :key="skill.label"
            class="custom-card group/item flex items-center justify-between p-2 text-gray-900 dark:text-gray-100 lg:relative lg:hover:bg-gray-200 lg:dark:hover:bg-gray-700"
          >
            <span class="text-gray-900 dark:text-gray-100">
              {{ skill.label }}
            </span>
            <Icon
              :name="skill.icon"
              size="32"
              class="z-10 transition-all duration-200 lg:group-hover/item:z-20 lg:group-hover/item:translate-x-[-100%] lg:group-hover/item:scale-[3]"
            />
          </div>
        </div>
      </div>
    </div>
  </SectionLayout>
</template>
