import React from 'react'
import spiner from '../../assets/spiner/spiner.gif'
import Image from 'next/image'
import s from './LoadingSpiner.module.scss'

const LoadingSpiner = () => {
  return (
    <div className={s.loading}>
      <Image src={spiner} width={60} height={60} alt='spiner' />
    </div>
  )
}

export default LoadingSpiner
