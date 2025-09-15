import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadCart = createAsyncThunk('cart/loadCart' , async()=>{
    const response = await axios.get('/api/cart-items?expand=product')
    return response.data;
})

export const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        isloading : false ,
        cart : [],
        error : false,
    },
    extraReducers : (builder)=>{
        builder.addCase(loadCart.pending , (state)=>{
            state.isloading = true;
            state.error  = false;
        })
        builder.addCase(loadCart.fulfilled , (state , action)=>{
            state.isloading = false;
            state.cart = action.payload;
        })
        builder.addCase(loadCart.rejected , (state , action)=>{
            state.error = action.error.message;
        })


    }
})

export default cartSlice.reducer;