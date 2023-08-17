'use client'
import React from 'react'
import s from './OrderItem.module.scss'
import Image from 'next/image'
import asteroid from '@/app/assets/images/asteroid.png'
import dangerousImg from '../../../assets/images/danger.svg'
import { AsteroidForCartType } from '@/app/types/types'
import arrow from '../../../assets/images/Arrow 1.png'

type Props = {
  data: AsteroidForCartType
}
const OrderItem = ({ data }: Props) => {
  const { id, date, name, dangerous, diameterMax, sizeImgAndroid, distance } = data

  return (
    <div className={s.item}>
      <div className={s.desc}>
        <div className={s.date}>{date}</div>
        <div className={s.about}>
          <div className={s.distance}>
            <span>{distance}</span>
            <Image src={arrow} alt={'Arrow'} />
          </div>
          <Image
            src={asteroid}
            width={sizeImgAndroid.width}
            height={sizeImgAndroid.height}
            alt='Asteroid'
          />
          <div className={s.info}>
            <div className={s.name}>{name}</div>
            <div className={s.size}>&#216; {diameterMax} м</div>
          </div>
        </div>
      </div>

      <div className={s.order}>
        {dangerous && <Image src={dangerousImg} width={67} height={20} alt='Asteroid' />}
      </div>
    </div>
  )
}

export default OrderItem
