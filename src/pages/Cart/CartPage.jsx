import React from 'react'
import { useCart } from '../../contexts/CartContext'
import { CartEmpty } from './components/CartEmpty';
import { CartList } from './components/CartList';
import { useTitle } from '../../hooks/useTitle';

export const  CartPage =()  => {
    const {cartList} =useCart();
    useTitle(`Cart: (${cartList.length})`);
  return (
    <main>
      {cartList.length===0 ? <CartEmpty/> : <CartList/>}
    </main>
  )
}