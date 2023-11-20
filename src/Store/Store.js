import { configureStore } from "@reduxjs/toolkit";
import imageReducer from '../Feature/ImageSlice'

export const store = configureStore({
        reducer: imageReducer
})

