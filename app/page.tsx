import s from './page.module.scss'
import Title from '@/app/components/Title/Title'
import Company from '@/app/components/Company/Company'
import Planet from '@/app/components/Planet/Planet'
import { calculateFutureDate } from '@/app/utils/calculateFutureDate'
import { fetchAndroids } from '@/app/services/api'
import MainContent from '@/app/components/MainContent/MainContent'

export default async function Home() {
  const startDate = calculateFutureDate(0)

  const data = await fetchAndroids(startDate)

  const androids = data.near_earth_objects[startDate]

  return (
    <main className={s.main}>
      <header className={s.header}>
        <Title />
        <Company />
      </header>
      <div className={s.planet}>
        <Planet />
      </div>
      <div className={s.block}>
        <MainContent data={androids} />
      </div>
    </main>
  )
}
