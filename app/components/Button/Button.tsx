import React from 'react'
import s from './Button.module.scss'

type Props = {
  title: string
  callback?: () => void
}
const Button = ({ title, callback }: Props) => {
  const titleText = title === 'в корзину' ? 'удалить из корзины' : ''
  return (
    <button title={titleText} className={s.button} onClick={callback}>
      {title}
    </button>
  )
}

export default Button
