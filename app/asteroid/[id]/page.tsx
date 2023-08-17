'use client'
import { getAsteroid } from '@/app/services/api'
import React from 'react'
import AsteroidPage from '@/app/components/AsteroidPage/AsteroidPage'

type Props = {
  params: {
    id: string
  }
}
export default async function Asteroid({ params: { id } }: Props) {
  const data = await getAsteroid(id)

  return <AsteroidPage data={data} />
}
