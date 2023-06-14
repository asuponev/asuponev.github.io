import { Endpoint } from '~/types'

export default () => {
  const config = useRuntimeConfig()
  const apiUrl = config.public.apiUrl

  const get = async <T>(endpoint: Endpoint) =>
    await useFetch<T>(`${apiUrl}/${endpoint}`)

  const getAboutData = async <T>() => await get<T>(Endpoint.about)

  const getExperienceData = async <T>() => await get<T>(Endpoint.experience)

  const getSkillsData = async <T>() => await get<T>(Endpoint.skills)

  const getEducationData = async <T>() => await get<T>(Endpoint.education)

  const getProjectsData = async <T>() => await get<T>(Endpoint.projects)

  return {
    getAboutData,
    getExperienceData,
    getSkillsData,
    getEducationData,
    getProjectsData,
  }
}
