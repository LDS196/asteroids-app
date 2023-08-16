'use client'
import React, { useState } from 'react'
import s from './Flights.module.scss'
import FlightItem from '@/app/components/Flights/FlightItem/FlightItem'
import { AndroidType, ModeType } from '@/app/types/types'
import Cart from '@/app/components/Company/Cart/Cart'
import Button from '@/app/components/Button/Button'

type Props = {
  data: AndroidType[]
}

const Flights = ({ data }: Props) => {
  const [androids, setAndroids] = useState(data)

  const [cart, setCart] = useState<AndroidType[]>([])

  const [mode, setMode] = useState<ModeType>('km')

  const [isSentOrder, setIsSentOrder] = useState(false)

  const setOrderStatus = (value: boolean) => {
    setIsSentOrder(value)
  }
  const setModeHandler = (value: ModeType) => {
    setMode(value)
  }

  const addToCartHandler = (android: AndroidType) => {
    setCart([...cart, android])
  }

  const deleteCarHandler = (id: string) => {
    const filteredCart = cart.filter((el) => el.id !== id)
    setCart(filteredCart)
  }
  const clearCart = () => {
    setCart([])
  }
  const androidX = isSentOrder ? cart : androids

  const title = isSentOrder ? 'Заказ отправлен!' : 'Ближайшие подлёты астероидов'

  const androidsForRender = androidX.map((android) => {
    const isInCart = cart.includes(android)
    return (
      <li key={android.id}>
        <FlightItem
          isSentOrder={isSentOrder}
          data={android}
          mode={mode}
          addToCartHandler={addToCartHandler}
          deleteCarHandler={deleteCarHandler}
          isInCart={isInCart}
        />
      </li>
    )
  })
  const goToEnd = () => {
    clearCart()
    setIsSentOrder(false)
  }
  return (
    <>
      <div className={s.flights}>
        <h4 className={s.title}>{title}</h4>
        {!isSentOrder && (
          <div className={s.settings}>
            <span onClick={() => setModeHandler('km')} className={mode === 'km' ? s.active : ''}>
              в километрах
            </span>
            <span className={s.line}></span>
            <span
              onClick={() => setModeHandler('lunar')}
              className={mode === 'lunar' ? s.active : ''}
            >
              в лунных орбитах
            </span>
          </div>
        )}
        <ul className={s.list}>{androidsForRender}</ul>
        {isSentOrder && <Button title={'назад'} callback={goToEnd} />}
      </div>
      {!isSentOrder && <Cart count={cart.length} setOrderStatus={setOrderStatus} />}
    </>
  )
}

export default Flights
