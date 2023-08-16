import React from 'react'
import { AndroidType, ModeType } from '@/app/types/types'
import AsteroidItem from '@/app/components/AsteroidItem/AsteroidItem'
import s from './Asteroid.module.scss'

type PropsType = {
  isSentOrder: boolean
  cart: AndroidType[]
  asteroids: AndroidType[]
  mode: ModeType
  addToCartHandler: (android: AndroidType) => void
  deleteCarHandler: (id: string) => void
}

const Asteroids = (props: PropsType) => {
  const { isSentOrder, cart, asteroids, mode, addToCartHandler, deleteCarHandler } = props

  const asteroidsForRender = asteroids.map((asteroid) => {
    const isInCart = cart.includes(asteroid)

    return (
      <li key={asteroid.id}>
        <AsteroidItem
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
  return <ul className={s.list}>{asteroidsForRender}</ul>
}

export default Asteroids
