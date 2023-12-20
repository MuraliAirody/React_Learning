import { createSlice } from "@reduxjs/toolkit";

const initialState={
    status:false,
    userDetails:null
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status = true;
            state.userDetails = action.payload.userData;
        },
        logout:(state,action)=>{
            state.status = true;
            state.userDetails = action.payload.userData;
        }
    }

})

export const {login,logout} = authSlice.actions
export default authSlice.reducer