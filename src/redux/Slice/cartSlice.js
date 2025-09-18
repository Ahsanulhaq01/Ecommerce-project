import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadCart = createAsyncThunk('cart/loadCart' , async()=>{
    const response = await axios.get('/api/cart-items?expand=product')
    return response.data;
})

export const deleteCart = createAsyncThunk('deleteCart' , async(id)=>{
    const response = await axios.delete(`/api/cart-items/${id}`)
    return response.data
})

export const updateCart = createAsyncThunk('updateCart' , async ({id , quantity}) => {
    const response = await axios.put(`/api/cart-items/${id}` , {
        quantity : Number(quantity)
    })
    return {id};
})
export const addProductToCart = createAsyncThunk('addtocart' , async({id , quantity})=>{
    const response = await axios.post(`/api/cart-items` , {
        productId:id,
        quantity,
    })
    return response.data;
})

export const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        isloading : false ,
        carts : [],
        error : null,
    },
    extraReducers : (builder)=>{
        builder.addCase(loadCart.pending , (state)=>{
            state.isloading = true;
            state.error  = null;
        })
        builder.addCase(loadCart.fulfilled , (state , action)=>{
            state.isloading = false;
            state.carts = action.payload;
        })
        builder.addCase(loadCart.rejected , (state ,action)=>{
            state.error =action.error.message

        })
        builder.addCase(deleteCart.fulfilled , (state, action)=>{
            state.carts = state.carts.filter(item => item.id !== action.payload.id)
        })
        builder.addCase(updateCart.fulfilled , (state , action)=>{
            const index = state.carts.findIndex((item) =>item.id === action.payload.id)
            if(index!== -1){
                state.carts[index] = action.payload
            }
        })
        builder.addCase(addProductToCart.fulfilled , (state , action)=>{
            const existingItem = state.carts.find(item => item.id === action.payload.id);
            if(existingItem){
                existingItem.quantity = action.payload.quantity;
            }
            else {
                state.carts.push(action.payload)
            }
        })


    }
})

export default cartSlice.reducer;