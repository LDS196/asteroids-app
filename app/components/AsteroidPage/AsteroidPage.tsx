import React from 'react'
import { AndroidType } from '@/app/types/types'
import AsteroidItem from '@/app/components/AsteroidItem/AsteroidItem'
import Button from '@/app/components/Button/Button'

type Props = {
  data: AndroidType
}
const AsteroidPage = ({ data }: Props) => {
  return (
    <div>
      <AsteroidItem data={data} />
      <Button title={'назад'} />
    </div>
  )
}

export default AsteroidPage
