import { IFeedbackForm } from '~/types'

export default defineEventHandler(async (event) => {
  try {
    const body: IFeedbackForm = await readBody(event)
    const config = useRuntimeConfig()
    const url = `https://api.telegram.org/bot${
      config.tgBbotToken
    }/sendMessage?chat_id=${
      config.tgChatId
    }&parse_mode=html&text=${JSON.stringify(body)}`

    const response: Response = await fetch(url, { method: 'POST' })
    const data = await response.json()

    return data
  } catch (error) {
    throw new Error('Something went wrong')
  }
})
