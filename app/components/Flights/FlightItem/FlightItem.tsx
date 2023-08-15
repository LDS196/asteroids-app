'use client'
import React from 'react'
import s from './FlightItem.module.scss'
import Image from 'next/image'
import asteroid from '@/app/assets/images/asteroid.png'
import Button from '@/app/components/Button/Button'
import danger from '../../../assets/images/danger.svg'
import { useRouter } from 'next/navigation'

const FlightItem = () => {
  const router = useRouter()
  const width = 36
  const height = 40

  const onClickHandler = () => {
    router.push('/asteroid/1')
  }

  return (
    <div className={s.item}>
      <div className={s.desc} onClick={onClickHandler}>
        <div className={s.date}> 12 сент 2023</div>
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
                fill-opacity='0.5'
              />
            </svg>
          </div>
          <Image src={asteroid} width={width} height={height} alt='Asteroid' />
          <div className={s.info}>
            <div className={s.name}> 2021 FQ</div>
            <div className={s.size}>&#216; 145 м</div>
          </div>
        </div>
      </div>

      <div className={s.order}>
        <Button title={'заказать'} />
        <Image src={danger} width={67} height={20} alt='Asteroid' />
      </div>
    </div>
  )
}

export default FlightItem
