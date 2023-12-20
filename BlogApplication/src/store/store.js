
import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice'
const store = configureStore({
   reducer:{
      auth:authSlice,

      //more reducers of post
   }
})

export default store