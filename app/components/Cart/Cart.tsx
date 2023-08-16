import React from 'react'
import s from './Cart.module.scss'

type PropsType = {
  count: number
  setOrderStatus: (value: boolean) => void
}
const Cart = ({ count, setOrderStatus }: PropsType) => {
  return (
    <div className={s.cart}>
      <div className={s.cart__about}>
        <p className={s.cart__title}>Корзина</p>
        <p className={s.cart__description}>{count} астероида</p>
      </div>
      <button onClick={() => setOrderStatus(true)} className={s.button}>
        Отправить
      </button>
    </div>
  )
}

export default Cart
