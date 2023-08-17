import * as React from 'react'
import { AndroidType, CartContextType } from '@/app/types/types'
import { useState } from 'react'

export const CartContext = React.createContext<CartContextType | null>(null)

const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState<AndroidType[]>([])

  const addToCart = (asteroid: AndroidType) => {
    setCart([...cart, asteroid])
  }

  const deleteFromCart = (id: string) => {
    const filteredCart = cart.filter((el) => el.id !== id)
    setCart(filteredCart)
  }

  const clearCart = () => {
    setCart([])
  }
  return (
    <CartContext.Provider value={{ cart, addToCart, deleteFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
