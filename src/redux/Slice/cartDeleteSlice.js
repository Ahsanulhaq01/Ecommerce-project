import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteCart = createAsyncThunk('deleteCart' , async(id)=>{
    const response = await axios.delete(`/api/cart-items/${id}`)
    return response.data
})

export const deleteSlice = createSlice({
    name :'deletecart' , 
    initialState : {
        isloading : false, 
        items :[],
        error : null,
    },
    extraReducers:(builder)=>{
        builder.addCase(deleteCart.pending , (state )=>{
            state.isloading = true;

        })
        builder.addCase(deleteCart.fulfilled , (state , action)=>{
            state.isloading = false;
            state.items = state.items.filter(item => item.id != action.payload.id)
        })
        builder.addCase(deleteCart.rejected , (state,action)=>{
            state.error = action.error.message;
        })
    }
})

export default deleteSlice.reducer;