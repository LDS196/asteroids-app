'use client'
import React, { useState } from 'react'
import s from './FlightItem.module.scss'
import Image from 'next/image'
import asteroid from '@/app/assets/images/asteroid.png'
import Button from '@/app/components/Button/Button'
import dangerousImg from '../../../assets/images/danger.svg'
import { useRouter } from 'next/navigation'
import { AndroidType, ModeType } from '@/app/types/types'
import { formatDate } from '@/app/utils/formatDate'
import { extractTextBetweenBrackets } from '@/app/utils/extract_text_between_brackets'
import { formatNumber } from '@/app/utils/formatNumber'
import arrow from '../../../assets/images/Arrow 1.png'

const averageSizeAndroid = 500
type Props = {
  isInCart: boolean
  data: AndroidType
  mode: ModeType
  addToCartHandler: (android: AndroidType) => void
  deleteCarHandler: (id: string) => void
}
const FlightItem = ({ data, mode, addToCartHandler, isInCart, deleteCarHandler }: Props) => {
  const router = useRouter()

  const onClickHandler = () => {
    router.push(`/asteroid/${id}`)
  }

  const date = formatDate(data.close_approach_data[0].close_approach_date)
  const dangerous = data.is_sentry_object
  const id = data.id
  const name = extractTextBetweenBrackets(data.name)
  const diameterMax = Math.ceil(data.estimated_diameter.meters.estimated_diameter_max)
  const sizeImgAndroid =
    diameterMax > averageSizeAndroid ? { width: 36, height: 40 } : { width: 22, height: 24 }
  const distance = {
    km: Math.ceil(+data.close_approach_data[0].miss_distance.kilometers),
    lunar: Math.ceil(+data.close_approach_data[0].miss_distance.lunar),
  }
  const unit = mode === 'km' ? 'км' : 'лунных орбит'
  const distanceForRender = formatNumber(distance[mode]) + ' ' + unit

  const addToCart = () => {
    addToCartHandler(data)
  }
  const deleteFromCart = () => {
    deleteCarHandler(data.id)
  }
  return (
    <div className={s.item}>
      <div className={s.desc} onClick={onClickHandler}>
        <div className={s.date}>{date}</div>
        <div className={s.about}>
          <div className={s.distance}>
            <span>{distanceForRender}</span>
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
        {isInCart ? (
          <Button callback={deleteFromCart} title={'в корзине'} />
        ) : (
          <Button callback={addToCart} title={'заказать'} />
        )}

        {dangerous && <Image src={dangerousImg} width={67} height={20} alt='Asteroid' />}
      </div>
    </div>
  )
}

export default FlightItem
