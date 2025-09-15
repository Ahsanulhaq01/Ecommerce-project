import { configureStore } from "@reduxjs/toolkit";
import productreduce from './Slice/productSlice'
export const store =  configureStore({
    reducer :{
        products : productreduce,
    },
})