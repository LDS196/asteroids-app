import React from 'react'
import { AndroidType } from '@/app/types/types'
import AsteroidItem from '@/app/components/AsteroidItem/AsteroidItem'
import Button from '@/app/components/Button/Button'
import ApproachItem from '@/app/components/AsteroidPage/ApproachItem'
import s from './AsteroidPage.module.scss'
type Props = {
  data: AndroidType
}
const AsteroidPage = ({ data }: Props) => {
  const approach = data.close_approach_data

  return (
    <div>
      <AsteroidItem data={data} />
      <ul className={s.list}>
        <h3>Список сближений астеройда:</h3>

        {approach.map((el) => (
          <li className={s.item} key={el.close_approach_date_full}>
            <ApproachItem data={el} />
          </li>
        ))}
      </ul>

      <Button title={'назад'} />
    </div>
  )
}

export default AsteroidPage
