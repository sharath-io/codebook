export const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartList: [...state.cartList, payload],
        total:state.total + Number(payload.price)
      };
    case "REMOVE_FROM_CART":
        return {...state,
          cartList:state.cartList.filter(product => product.id!==payload.id),
          total:state.total - Number(payload.price)
        }
    case "CLEAR_CART":
      return { ...state, cartList: [], total: 0 };
    default:
      return state;
  }
};
