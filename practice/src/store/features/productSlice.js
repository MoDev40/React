import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    products:[],
    status:"idle",
    error:null
}

export const fetchProducts = createAsyncThunk("product/fetchProducts",async ()=>{
    const res = await axios.get("https://fakestoreapi.com/products")
    return res.data
})
export const addProduct = createAsyncThunk("product/addProct",async (newProduct)=>{
    const res = await axios.post("https://fakestoreapi.com/products",newProduct)
    return res.data
})
const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
    },
    extraReducers:(builder)=>{
        // it's like switch statement
        builder
            // case Loading!
            .addCase(fetchProducts.pending,(state)=>{
                state.status = "Loading"
                state.error = null
            })
            // case done!
            .addCase(fetchProducts.fulfilled,(state,action)=>{
                state.status = "success"
                state.products = action.payload
            })
            // case failed
            .addCase(fetchProducts.rejected,(state,action)=>{
                state.status = "failed"
                state.error = action.error.message
            })
            .addCase(addProduct.fulfilled,(state,action)=>{
                state.products.push(action.payload)
            })
    }
})

export const { status , error} = initialState 
export default productSlice.reducer
