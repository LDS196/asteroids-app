import React from 'react'
import { AsteroidForCartType } from '@/app/types/types'
import s from './Order.module.scss'
import OrderItem from '@/app/components/Order/OrderItem/OrderItem'

type PropsType = {
  cart: AsteroidForCartType[]
}

const Order = ({ cart }: PropsType) => {
  const orderForRender = cart.map((el) => {
    return (
      <li key={el.id}>
        <OrderItem data={el} />
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
