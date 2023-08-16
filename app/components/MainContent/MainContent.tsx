'use client'
import React, { useState } from 'react'
import s from './MainContent.module.scss'
import { AndroidType, ModeType } from '@/app/types/types'
import Cart from '@/app/components/Cart/Cart'
import Button from '@/app/components/Button/Button'
import Asteroids from '@/app/components/AsteroidsList/Asteroids'

type Props = {
  data: AndroidType[]
}
const MainContent = ({ data }: Props) => {
  const [asteroidsArr, setAndroidsArr] = useState(data)
  const [cart, setCart] = useState<AndroidType[]>([])
  const [modeDistance, setModeDistance] = useState<ModeType>('km')
  const [isSentOrder, setIsSentOrder] = useState(false)

  const setOrderStatus = (value: boolean) => {
    setIsSentOrder(value)
  }
  const onSetModeDistance = (value: ModeType) => {
    setModeDistance(value)
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
  const goToEnd = () => {
    clearCart()
    setIsSentOrder(false)
  }
  const asteroids = isSentOrder ? cart : asteroidsArr

  const title = isSentOrder ? 'Заказ отправлен!' : 'Ближайшие подлёты астероидов'

  return (
    <>
      <div className={s.flights}>
        <h4 className={s.title}>{title}</h4>

        {!isSentOrder && (
          <div className={s.settings}>
            <span
              onClick={() => onSetModeDistance('km')}
              className={modeDistance === 'km' ? s.active : ''}
            >
              в километрах
            </span>
            <span className={s.line}></span>
            <span
              onClick={() => onSetModeDistance('lunar')}
              className={modeDistance === 'lunar' ? s.active : ''}
            >
              в лунных орбитах
            </span>
          </div>
        )}

        <Asteroids
          cart={cart}
          isSentOrder={isSentOrder}
          asteroids={asteroids}
          mode={modeDistance}
          addToCartHandler={addToCartHandler}
          deleteCarHandler={deleteCarHandler}
        />

        {isSentOrder && <Button title={'назад'} callback={goToEnd} />}
      </div>
      {!isSentOrder && <Cart count={cart.length} setOrderStatus={setOrderStatus} />}
    </>
  )
}

export default MainContent
