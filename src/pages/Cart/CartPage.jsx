import React from 'react'
import { useCart } from '../../contexts/CartContext'
import { CartEmpty } from './components/CartEmpty';
import { CartList } from './components/CartList';

export const  CartPage =()  => {
    const {cartList} =useCart();
  return (
    <main>
      {cartList.length===0 ? <CartEmpty/> : <CartList/>}
    </main>
  )
}