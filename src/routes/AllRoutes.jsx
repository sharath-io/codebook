import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {HomePage, ProductsList} from '../pages'
import { ProductDetail } from '../pages/ProductDetail'

export const AllRoutes =() =>  {
  return (
    <Routes>
         <Route path="/" element={<HomePage/>}/>
         <Route path="products" element={<ProductsList/>}/>
         <Route path="products/:id" element={<ProductDetail/>}/>
    </Routes>
  )
}

export default AllRoutes