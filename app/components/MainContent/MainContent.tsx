'use client'
import React, { useState } from 'react'
import s from './MainContent.module.scss'
import { AndroidType, AsteroidForCartType } from '@/app/types/types'
import Cart from '@/app/components/Cart/Cart'
import Button from '@/app/components/Button/Button'
import Asteroids from '@/app/components/AsteroidsList/Asteroids'
import Order from '@/app/components/Order/Order'

type Props = {
  data: AndroidType[]
}
export const MainContent = ({ data }: Props) => {
  const [cart, setCart] = useState<AsteroidForCartType[]>([])

  const [isSentOrder, setIsSentOrder] = useState(false)

  const setOrderStatus = (value: boolean) => {
    setIsSentOrder(value)
  }

  const addToCartHandler = (asteroid: AsteroidForCartType) => {
    setCart([...cart, asteroid])
  }

  const deleteCarHandler = (id: string) => {
    const filteredCart = cart.filter((el) => el.id !== id)
    setCart(filteredCart)
  }

  const clearCart = () => {
    setCart([])
  }
  const goToBack = () => {
    clearCart()
    setIsSentOrder(false)
  }

  return (
    <>
      <div className={s.asteroids}>
        {isSentOrder ? (
          <div>
            <Order cart={cart} />
            {isSentOrder && <Button title={'назад'} callback={goToBack} />}
          </div>
        ) : (
          <Asteroids
            cart={cart}
            asteroids={data}
            addToCartHandler={addToCartHandler}
            deleteCarHandler={deleteCarHandler}
          />
        )}
      </div>

      {!isSentOrder && <Cart count={cart.length} setOrderStatus={setOrderStatus} />}
    </>
  )
}
