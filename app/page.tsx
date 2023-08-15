import s from './page.module.scss'
import Title from '@/app/components/Title/Title'
import Company from '@/app/components/Company/Company'
import Planet from '@/app/components/Planet/Planet'


export default function Home() {
  return (
    <main className={s.main}>
      <header className={s.header}>
        <Title />
        <Company/>
      </header>

      <div className={s.planet}>
        <Planet/>
      </div>
    </main>
  )
}
