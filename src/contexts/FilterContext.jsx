import { createContext, useContext, useReducer } from "react"
import { FilterReducer } from "../reducers/FilterReducer";

const initialState={
    productList:[],
    best_seller:false,
    in_stock:false,
    sortBy:null,
    rating:null
}

export const FilterContext = createContext(initialState);

export const FilterProvider =({children}) =>{
    const [state,dispatch] = useReducer(FilterReducer, initialState);

    const initialProducts =(products)=>{
        dispatch({type:"PRODUCT_LIST", payload:{products:products}})
    }

    const bestSeller=(products) =>{
      return state.best_seller ? products.filter(product => product.best_seller===true) : products
    }

    const inStockOnly=(products) =>{
        return state.in_stock ? products.filter(product => product.in_stock===true) : products
      }

    const sort=(products) =>{
        if(state.sortBy==='LTH'){
            return products.sort((a,b) => Number(a.price)- Number(b.price))
        }
        if(state.sortBy==='HTL'){
            return products.sort((a,b) => Number(b.price) - Number(a.price))
        }
        return products
    }

    const rating =(products)=>{
        if(state.rating==='4STARSANDABOVE'){
            return products.filter(product => product.rating>=4)
        }
        if(state.rating==='3STARSANDABOVE'){
            return products.filter(product => product.rating>=3)
        }
        if(state.rating==='2STARSANDABOVE'){
            return products.filter(product => product.rating>=2)
        }
        if(state.rating==='1STARSANDABOVE'){
            return products.filter(product => product.rating>=1)
        }
        return products;
    }

    const filteredProducts= rating(sort(inStockOnly(bestSeller(state.productList))));

    const value ={
        state,
        dispatch,
        products:filteredProducts,
        initialProducts
    }


    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext);