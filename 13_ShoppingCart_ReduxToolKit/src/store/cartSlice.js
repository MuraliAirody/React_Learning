import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    cartProducts:[]
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
       add:(state,action)=>{
           state.cartProducts.push(action.payload)
       },
       remove:(state,action)=>{
           state.cartProducts = state.cartProducts.filter((product)=>product.id!=action.payload)
       }
    }
})

export const {add,remove} = cartSlice.actions
export default cartSlice.reducer