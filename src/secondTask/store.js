import { configureStore } from '@reduxjs/toolkit';
import photosReducer  from "../secondTask/slice";
import { getDefaultMiddleware } from '@reduxjs/toolkit';


const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
})


export const store = configureStore({
    reducer: {
        photos: photosReducer 
    },
    middleware: (getDefaultMiddleware) => customizedMiddleware,
});