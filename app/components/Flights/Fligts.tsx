'use client'
import React, { useState } from 'react'
import s from './Flights.module.scss'
import FlightItem from '@/app/components/Flights/FlightItem/FlightItem'
import { AndroidType, ModeType } from '@/app/types/types'

type Props = {
  data: AndroidType[]
}

const Flights = ({ data }: Props) => {
  const [androids, setAndroids] = useState(data)
  const [mode, setMode] = useState<ModeType>('km')
  const setModeHandler = (value: ModeType) => {
    setMode(value)
  }

  const androidsForRender = androids.map((android) => {
    return (
      <li key={android.id}>
        <FlightItem data={android} mode={mode} />
      </li>
    )
  })

  return (
    <div className={s.flights}>
      <h4 className={s.title}>Ближайшие подлёты астероидов</h4>
      <div className={s.settings}>
        <span onClick={() => setModeHandler('km')} className={mode === 'km' ? s.active : ''}>
          в километрах
        </span>{' '}
        <span className={s.line}></span>
        <span onClick={() => setModeHandler('lunar')} className={mode === 'lunar' ? s.active : ''}>
          в лунных орбитах
        </span>
      </div>
      <ul className={s.list}>{androidsForRender}</ul>
    </div>
  )
}

export default Flights
