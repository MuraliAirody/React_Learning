import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    productsList:[],
    status:'idle'
}

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
    //    fetchProducts:(state,action)=>{
    //       state.productsList = action.payload
    //    }
    },
    extraReducers:(builder)=>{

        builder.addCase(getProducts.pending,(state,action)=>{
            state.status = 'loading'
        })

        builder.addCase(getProducts.fulfilled,(state,action)=>{
            state.productsList = action.payload
            state.status = 'idle'
        })

        builder.addCase(getProducts.rejected,(state,action)=>{
            state.status = 'error'
        })

    }
})

export const {fetchProducts} = productSlice.actions
export default productSlice.reducer

export const getProducts = createAsyncThunk('product/get',async ()=>{
    const data = await fetch("https://fakestoreapi.com/products")
    const result = await data.json()

    return result
})

// export function getProducts(){
//     return async function getProducts(dispatch,getState){
//         const data = await fetch("https://fakestoreapi.com/products")
//         const result = await data.json()
//         dispatch(fetchProducts(result))
//     }
// }