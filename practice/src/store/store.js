import {configureStore} from "@reduxjs/toolkit"
import { productsSlice } from "./features/productsSlice" 
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import { userSlice } from "./features/userSlice"
export const store = configureStore({
   reducer:{
      [userSlice.reducerPath] : userSlice.reducer,
   },
   middleware:(getDefaultMiddleware)=> getDefaultMiddleware()
   .concat(userSlice.middleware)
}) 

setupListeners(store.dispatch)