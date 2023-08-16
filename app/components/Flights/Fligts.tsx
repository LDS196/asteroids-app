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
  const [asteroidsArr, setAndroidsArr] = useState(data)

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
  const asteroids = isSentOrder ? cart : asteroidsArr

  const title = isSentOrder ? 'Заказ отправлен!' : 'Ближайшие подлёты астероидов'

  const asteroidsForRender =asteroids.map((asteroid) => {
    const isInCart = cart.includes(asteroid)
    return (
      <li key={asteroid.id}>
        <FlightItem
          isSentOrder={isSentOrder}
          data={asteroid}
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
        <ul className={s.list}>{asteroidsForRender}</ul>
        {isSentOrder && <Button title={'назад'} callback={goToEnd} />}
      </div>
      {!isSentOrder && <Cart count={cart.length} setOrderStatus={setOrderStatus} />}
    </>
  )
}

export default Flights
