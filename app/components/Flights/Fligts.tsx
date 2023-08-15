import React from 'react'
import s from './Flights.module.scss'
import FlightItem from '@/app/components/Flights/FlightItem/FlightItem'

const Flights = () => {
  return (
    <div className={s.flights}>
      <h4 className={s.title}>Ближайшие подлёты астероидов</h4>
      <div className={s.settings}>
        <span>в километрах</span> <span className={s.line}></span>
        <span className={s.active}>в лунных орбитах</span>
      </div>
      <FlightItem />
    </div>
  )
}

export default Flights
