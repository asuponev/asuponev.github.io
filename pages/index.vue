<script lang="ts" setup>
import { IAbout, IExperience, ISkill, IEducation, IProject } from '~/types'

const tabItems = ref([
  { label: 'About', icon: 'ph:user' },
  { label: 'Experience', icon: 'ph:wrench' },
  { label: 'Skills', icon: 'ph:lightning' },
  { label: 'Education', icon: 'ph:student' },
  { label: 'Projects', icon: 'ph:laptop' },
])

const { data: about } = await useApi().getAboutData<IAbout[]>()
const { data: experience } = await useApi().getExperienceData<IExperience[]>()
const { data: skills } = await useApi().getSkillsData<ISkill[]>()
const { data: education } = await useApi().getEducationData<IEducation[]>()
const { data: projects } = await useApi().getProjectsData<IProject[]>()
</script>

<template>
  <HeadlessTabGroup>
    <HeadlessTabList
      class="fixed left-0 top-16 flex h-14 w-full items-center bg-white dark:bg-gray-900"
    >
      <div class="container grid grid-cols-5 gap-1">
        <HeadlessTab
          v-for="item in tabItems"
          :key="item.label"
          v-slot="{ selected }"
          as="template"
        >
          <button
            class="flex w-full items-center justify-center rounded-lg p-2 text-sm font-semibold text-gray-900 transition-shadow duration-200 focus:outline-none dark:text-gray-100"
            :class="
              selected
                ? 'shadow shadow-gray-200 dark:shadow-gray-800'
                : 'hover:shadow hover:shadow-gray-200 dark:hover:shadow-gray-800'
            "
          >
            <Icon
              :name="item.icon"
              size="20"
            />
            <span class="ml-1 hidden sm:inline-block">{{ item.label }}</span>
          </button>
        </HeadlessTab>
      </div>
    </HeadlessTabList>
    <HeadlessTabPanels>
      <HeadlessTabPanel v-if="about">
        <SectionAbout :data="about" />
      </HeadlessTabPanel>
      <HeadlessTabPanel v-else>
        <SectionEmpty />
      </HeadlessTabPanel>

      <HeadlessTabPanel v-if="experience">
        <SectionExperience :data="experience" />
      </HeadlessTabPanel>
      <HeadlessTabPanel v-else>
        <SectionEmpty />
      </HeadlessTabPanel>

      <HeadlessTabPanel v-if="skills">
        <SectionSkills :data="skills" />
      </HeadlessTabPanel>
      <HeadlessTabPanel v-else>
        <SectionEmpty />
      </HeadlessTabPanel>

      <HeadlessTabPanel v-if="education">
        <SectionEducation :data="education" />
      </HeadlessTabPanel>
      <HeadlessTabPanel v-else>
        <SectionEmpty />
      </HeadlessTabPanel>

      <HeadlessTabPanel v-if="projects">
        <SectionProjects :data="projects" />
      </HeadlessTabPanel>
      <HeadlessTabPanel v-else>
        <SectionEmpty />
      </HeadlessTabPanel>
    </HeadlessTabPanels>
  </HeadlessTabGroup>
</template>
