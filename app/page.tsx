import { calculateFutureDate } from '@/app/utils/calculateFutureDate'
import { fetchAndroids } from '@/app/services/api'
import { MainContent } from '@/app/components/MainContent/MainContent'

export default async function Home() {
  const startDate = calculateFutureDate(0)

  const data = await fetchAndroids(startDate)

  const androids = data.near_earth_objects[startDate]

  return <MainContent data={androids} />
}
