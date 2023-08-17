import { API_KEY, BASE_URL } from '@/app/services/common.api'

export const getAsteroid = async (id: string) => {
  const response = await fetch(`${BASE_URL}/neo/${id}?api_key=${API_KEY}`)

  if (!response.ok) throw new Error('Unable to fetch asteroids.')

  return response.json()
}

export const fetchAndroids = async (startDate: string) => {
  const response = await fetch(
    `${BASE_URL}/feed?start_date=${startDate}&end_date=${startDate}&api_key=${API_KEY}`,
  )

  if (!response.ok) throw new Error('Unable to fetch asteroids.')

  return response.json()
}
