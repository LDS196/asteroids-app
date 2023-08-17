import React from 'react'
import { AndroidType } from '@/app/types/types'
import s from './Order.module.scss'
import AsteroidItem from '@/app/components/AsteroidItem/AsteroidItem'

type PropsType = {
  cart: AndroidType[]
}

const Order = ({ cart }: PropsType) => {
  const orderForRender = cart.map((el) => {
    return (
      <li key={el.id}>
        <AsteroidItem data={el} />
      </li>
    )
  })

  return (
    <>
      <h4 className={s.title}>Заказ отправлен!</h4>
      <ul className={s.list}>{orderForRender}</ul>
    </>
  )
}

export default Order
