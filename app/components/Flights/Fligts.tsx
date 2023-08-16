'use client'
import React, { useState } from 'react'
import s from './Flights.module.scss'
import FlightItem from '@/app/components/Flights/FlightItem/FlightItem'
import { AndroidType } from '@/app/types/types'

type Props = {
  data: AndroidType[]
}

const Flights = ({ data }: Props) => {
  const [androids, setAndroids] = useState(data)

  const androidsForRender = androids.map((android) => {
    return (
      <li key={android.id}>
        <FlightItem data={android} />
      </li>
    )
  })

  return (
    <div className={s.flights}>
      <h4 className={s.title}>Ближайшие подлёты астероидов</h4>
      <div className={s.settings}>
        <span>в километрах</span> <span className={s.line}></span>
        <span className={s.active}>в лунных орбитах</span>
      </div>
      <ul className={s.list}>{androidsForRender}</ul>
    </div>
  )
}

export default Flights
