import React from 'react'

export const filterReducer = (state,action) =>  {
    const {type,payload} = action;

    switch(type){
        case 'PRODUCT_LIST': return {productList: payload.products}
        case 'BESTSELLER_ONLY': return {...state, best_seller:payload.best_seller}
        case 'INSTOCK_ONLY': return {...state, in_stock:payload.in_stock}
        case 'SORT_BY': return {...state, sortBy:payload.sortBy}
        case 'RATING': return {...state,rating:payload.rating}
        case 'CLEAR_FILTERS' : return {...state, best_seller:false,in_stock:false,sortBy:null,rating:null}
        default :return state;
    }
  
}