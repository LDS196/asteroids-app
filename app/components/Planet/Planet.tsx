import React from 'react'
import Image from 'next/image'
import planet from '../../assets/images/planeta.jpg'
import s from './Planet.module.scss'
const Planet = () => {
  return <Image src={planet} alt='Planet' />
}

export default Planet
