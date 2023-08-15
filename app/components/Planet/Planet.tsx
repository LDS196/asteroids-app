import React from 'react'
import Image from 'next/image'
import planet from '../../assets/images/planeta.jpg'
const Planet = () => {
  return <Image src={planet} width={536} height={620} alt='Planeta' />
}

export default Planet
