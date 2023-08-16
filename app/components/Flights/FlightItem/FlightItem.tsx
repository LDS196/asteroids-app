'use client'
import React from 'react'
import s from './FlightItem.module.scss'
import Image from 'next/image'
import asteroid from '@/app/assets/images/asteroid.png'
import Button from '@/app/components/Button/Button'
import dangerousImg from '../../../assets/images/danger.svg'
import { useRouter } from 'next/navigation'
import { AndroidType } from '@/app/types/types'
import { formatDate } from '@/app/utils/formatDate'
import { extractTextBetweenBrackets } from '@/app/utils/extract_text_between_brackets'

type Props = {
  data: AndroidType
}
const FlightItem = ({ data }: Props) => {
  const date = formatDate(data.close_approach_data[0].close_approach_date)
  const dangerous = data.is_sentry_object
  const id = data.id
  const name = extractTextBetweenBrackets(data.name)
  const diameterMax = Math.ceil(data.estimated_diameter.meters.estimated_diameter_max)
  const router = useRouter()
  const width = 36
  const height = 40

  const onClickHandler = () => {
    router.push(`/asteroid/${id}`)
  }

  return (
    <div className={s.item}>
      <div className={s.desc} onClick={onClickHandler}>
        <div className={s.date}>{date}</div>
        <div className={s.about}>
          <div className={s.distance}>
            <span>5 333 259 км</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='96'
              height='6'
              viewBox='0 0 96 6'
              fill='none'
            >
              <path
                d='M0 3L5 5.88675L5 0.113249L0 3ZM96 3.00001L91 0.113257L91 5.88676L96 3.00001ZM4.5 3.5L91.5 3.50001L91.5 2.50001L4.5 2.5L4.5 3.5Z'
                fill='white'
                fillOpacity='0.5'
              />
            </svg>
          </div>
          <Image src={asteroid} width={width} height={height} alt='Asteroid' />
          <div className={s.info}>
            <div className={s.name}>{name}</div>
            <div className={s.size}>&#216; {diameterMax} м</div>
          </div>
        </div>
      </div>

      <div className={s.order}>
        <Button title={'заказать'} />
        {dangerous && <Image src={dangerousImg} width={67} height={20} alt='Asteroid' />}
      </div>
    </div>
  )
}

export default FlightItem
