import { configureStore } from "@reduxjs/toolkit";
import ShowReducer from './Slice'

export const store = configureStore({
    reducer: {
        Sign: ShowReducer
    }
})
