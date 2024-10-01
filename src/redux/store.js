import { configureStore } from "@reduxjs/toolkit"

import CartSlice from "./slices/cartSlice"

export const store = configureStore({
    reducer: { cart: CartSlice },
    devTools: process.env.NODE_ENV !== 'production',
})