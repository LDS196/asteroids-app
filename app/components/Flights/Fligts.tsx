'use client'
import React, { useState } from 'react'
import s from './Flights.module.scss'
import FlightItem from '@/app/components/Flights/FlightItem/FlightItem'
import { AndroidType, ModeType } from '@/app/types/types'
import Cart from '@/app/components/Company/Cart/Cart'

type Props = {
  data: AndroidType[]
}

const Flights = ({ data }: Props) => {
  const [androids, setAndroids] = useState(data)

  const [cart, setCart] = useState<AndroidType[]>([])

  const [mode, setMode] = useState<ModeType>('km')

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
  const androidsForRender = androids.map((android) => {
    const isInCart = cart.includes(android)
    return (
      <li key={android.id}>
        <FlightItem
          data={android}
          mode={mode}
          addToCartHandler={addToCartHandler}
          deleteCarHandler={deleteCarHandler}
          isInCart={isInCart}
        />
      </li>
    )
  })

  return (
    <>
      <div className={s.flights}>
        <h4 className={s.title}>Ближайшие подлёты астероидов</h4>
        <div className={s.settings}>
          <span onClick={() => setModeHandler('km')} className={mode === 'km' ? s.active : ''}>
            в километрах
          </span>{' '}
          <span className={s.line}></span>
          <span
            onClick={() => setModeHandler('lunar')}
            className={mode === 'lunar' ? s.active : ''}
          >
            в лунных орбитах
          </span>
        </div>
        <ul className={s.list}>{androidsForRender}</ul>
      </div>
      <Cart />
    </>
  )
}

export default Flights
