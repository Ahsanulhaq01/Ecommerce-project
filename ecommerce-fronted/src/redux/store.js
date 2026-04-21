import { configureStore } from "@reduxjs/toolkit";
import productreduce from './Slice/productSlice'
import cartreduce from './Slice/cartSlice'
import ordersreduce from './Slice/orderSlice'
export const store =  configureStore({
    reducer :{
        products : productreduce,
        cart : cartreduce,
        orders : ordersreduce,
    },
})