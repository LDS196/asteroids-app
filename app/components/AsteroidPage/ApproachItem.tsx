import React from 'react'
import { CloseApproachData } from '@/app/types/types'
import { formatDateWithTime } from '@/app/utils/formatDateWithTime'

type Props = {
  data: CloseApproachData
}
const ApproachItem = ({ data }: Props) => {
  const date = formatDateWithTime(data.close_approach_date_full)
  const speed = `${Math.ceil(+data.relative_velocity.kilometers_per_hour)} км/ч`
  const distance = `${Math.ceil(+data.miss_distance.kilometers)} км`
  const orbit = data.orbiting_body
  return (
    <>
      <p>скорость относительно Земли: {speed} </p>
      <p>время максимального сближения с Землей: {date} </p>
      <p>расстояние до Земли: {distance}</p>
      <p>орбита: {orbit} </p>
    </>
  )
}

export default ApproachItem
