import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axoisInstance";

export const getOrders = createAsyncThunk('getorders' , async()=>{
    const response = await axiosInstance.get('/api/orders?expand=products');
    return response.data;
})

export const orderSlice = createSlice({
    name :'orders',
    initialState : {
        orders : [],
    },
    extraReducers : (builder)=>{
        builder.addCase(getOrders.fulfilled , (state , action)=>{
            state.orders = action.payload;
        })
    }
})

export default orderSlice.reducer;