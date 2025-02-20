import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";

const cartInitialState ={
    cartList:[],
    total:0
}

const CartContext = createContext(cartInitialState);

export const CartProvider =({children}) =>{
    const [state,dispatch] = useReducer(cartReducer,cartInitialState);

    const addToCart=(product) =>{
        dispatch({type:"ADD_TO_CART", payload:product})
    }

    const removeFromCart=(productId) =>{
        dispatch({type:"REMOVE_FROM_CART", payload:productId})
    }

    const clearCart=() =>{
        dispatch({type:"CLEAR_CART"})
    }

    const value={
        cartList:state.cartList,
        total:state.total,
        addToCart,
        removeFromCart,
        clearCart
    }
return (
    <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
)
}

export const useCart=() => useContext(CartContext);