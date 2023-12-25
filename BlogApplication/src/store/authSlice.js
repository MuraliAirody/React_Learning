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
            state.userDetails = action.payload;
            // console.log("login: ",state.userDetails);
            // console.log("login: ",action.payload);
        },
        logout:(state,action)=>{
            state.status = false;
            state.userDetails=null
            // console.log("logout: ",state.userDetails);
        }
    }

})

export const {login,logout} = authSlice.actions
export default authSlice.reducer