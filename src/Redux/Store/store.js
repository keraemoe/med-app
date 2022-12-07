import { configureStore } from "@reduxjs/toolkit";
import auth from '../Slices/AuthSlice';

export const store = configureStore({
    reducer: {
        auth
    }
})