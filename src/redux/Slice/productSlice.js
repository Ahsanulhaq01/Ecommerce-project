import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductData = createAsyncThunk('ProductData' , async()=>{
    const response = await axios.get('/api/products')
    return response.data;
})
export const productSlice = createSlice({
    name :"products",
    initialState :{
        isloading : false,
        products : [] ,
        error : false,
    },
    extraReducers : (builder)=>{
        builder.addCase(getProductData.pending , (state)=>{
            state.isloading = true ;
            state.error = false;
        })
        builder.addCase(getProductData.fulfilled , (state , action)=>{
            state.isloading = false ;
            state.products = action.payload;
        })
        builder.addCase(getProductData.rejected , (state , action)=>{
            state.isloading = false;
            state.error = action.error.message;
        })
    }
})

export default productSlice.reducer;

//builder => through that we can listion to the changes to fetch todo