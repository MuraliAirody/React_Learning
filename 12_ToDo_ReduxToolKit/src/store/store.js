import {configureStore} from '@reduxjs/toolkit'
import todoSlice from '../feature/todo/todoSlice'

export const store = configureStore({
    reducer:{
        todo:todoSlice
    }
})