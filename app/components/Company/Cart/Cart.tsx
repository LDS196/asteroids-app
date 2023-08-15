import React from 'react'
import s from './Cart.module.scss'

const Cart = () => {
  return (
    <div className={s.cart}>
      <div className={s.cart__about}>
        <p className={s.cart__title}>Корзина</p>
        <p className={s.cart__description}>2 астероида</p>
      </div>
      <button className={s.button}>Отправить</button>
    </div>
  )
}

export default Cart
