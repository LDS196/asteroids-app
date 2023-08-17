import React, { useState } from 'react'
import { AndroidType, AsteroidForCartType, ModeType } from '@/app/types/types'
import AsteroidItem from '@/app/components/AsteroidItem/AsteroidItem'
import s from './Asteroid.module.scss'
import { calculateFutureDate } from '@/app/utils/calculateFutureDate'
import InfiniteScroll from 'react-infinite-scroll-component'
import { fetchAndroids } from '@/app/services/api'
import LoadingSpiner from '@/app/components/Loading/LoadingSpiner'

type PropsType = {
  cart: AsteroidForCartType[]
  asteroids: AndroidType[]
  addToCartHandler: (android: AsteroidForCartType) => void
  deleteCarHandler: (id: string) => void
}

const Asteroids = (props: PropsType) => {
  const { cart, asteroids, addToCartHandler, deleteCarHandler } = props
  const [modeDistance, setModeDistance] = useState<ModeType>('km')
  const [asteroidsArr, setAndroidsArr] = useState(asteroids)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const onSetModeDistance = (value: ModeType) => {
    setModeDistance(value)
  }
  const fetchData = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const startDate = calculateFutureDate(page)
      const data = await fetchAndroids(startDate)

      setAndroidsArr((prev) => [...prev, ...data.near_earth_objects[startDate]])
      setPage((prev) => prev + 1)
    } catch (error: any) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  const asteroidsForRender = asteroidsArr.map((asteroid) => {
    const isInCart = !!cart.find((el) => el.id === asteroid.id)

    return (
      <li key={asteroid.id}>
        <AsteroidItem
          data={asteroid}
          mode={modeDistance}
          addToCartHandler={addToCartHandler}
          deleteCarHandler={deleteCarHandler}
          isInCart={isInCart}
        />
      </li>
    )
  })
  return (
    <div>
      <InfiniteScroll
        dataLength={asteroidsArr.length}
        next={fetchData}
        hasMore={true}
        loader={<LoadingSpiner />}
        endMessage={<p>No more data to load.</p>}
      >
        <h4 className={s.title}>Ближайшие подлёты астероидов</h4>
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
        <ul className={s.list}>{asteroidsForRender}</ul>
      </InfiniteScroll>
    </div>
  )
}

export default Asteroids
