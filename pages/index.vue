<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
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

const pagination = {
  clickable: true,
  renderBullet: (_index: number, className: string) => {
    return `<span class="${className}"></span>`
  },
}
const modules = [Pagination]
</script>

<template>
  <Swiper
    :modules="modules"
    :pagination="pagination"
    :autoHeight="true"
    :spaceBetween="20"
  >
    <div
      class="container fixed left-0 top-16 z-40 grid h-14 w-full grid-cols-5 items-center gap-1 bg-white dark:bg-gray-900"
    >
      <div
        v-for="item in tabItems"
        :key="item.label"
        class="flex h-9 w-full items-center justify-center rounded-lg bg-white text-sm font-semibold text-gray-900 transition-shadow duration-200 hover:shadow focus:outline-none dark:bg-gray-900 dark:text-gray-100"
      >
        <Icon
          :name="item.icon"
          size="20"
        />
        <span class="ml-1 hidden sm:inline-block">
          {{ item.label }}
        </span>
      </div>
    </div>
    <SwiperSlide>
      <SectionAbout
        v-if="about"
        :data="about"
      />
      <SectionEmpty v-else />
    </SwiperSlide>

    <SwiperSlide>
      <SectionExperience
        v-if="experience"
        :data="experience"
      />
      <SectionEmpty v-else />
    </SwiperSlide>

    <SwiperSlide>
      <SectionSkills
        v-if="skills"
        :data="skills"
      />
      <SectionEmpty v-else />
    </SwiperSlide>

    <SwiperSlide>
      <SectionEducation
        v-if="education"
        :data="education"
      />
      <SectionEmpty v-else />
    </SwiperSlide>

    <SwiperSlide>
      <SectionProjects
        v-if="projects"
        :data="projects"
      />
      <SectionEmpty v-else />
    </SwiperSlide>
  </Swiper>
</template>

<style>
.swiper-pagination {
  @apply fixed left-0 top-16 z-50 mx-auto grid h-14 w-full max-w-[1440px] grid-cols-5 items-center gap-1 px-5 !important;
}

.swiper-pagination-bullet {
  @apply m-0 flex h-9 w-full items-center justify-center rounded-lg bg-transparent p-2 outline-none transition-shadow duration-200 hover:shadow hover:shadow-gray-400 focus:outline-none !important;
}

.swiper-pagination-bullet-active {
  @apply shadow shadow-gray-300 hover:shadow-gray-300 dark:shadow-gray-700 !important;
}
</style>
