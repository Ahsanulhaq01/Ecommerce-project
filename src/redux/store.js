import { configureStore } from "@reduxjs/toolkit";
import productreduce from './Slice/productSlice'
import cartreduce from './Slice/cartSlice'
export const store =  configureStore({
    reducer :{
        products : productreduce,
        cart : cartreduce,
    },
})