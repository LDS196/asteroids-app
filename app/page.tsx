import s from './page.module.scss'
import Title from '@/app/components/Title/Title'
import Company from '@/app/components/Company/Company'
import Planet from '@/app/components/Planet/Planet'
import Cart from '@/app/components/Company/Cart/Cart'
import Flights from '@/app/components/Flights/Fligts'

export default function Home() {
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
        <Flights />
        <Cart />
      </div>
    </main>
  )
}
