import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice.js";
import productReducer from "./productslice.js";

const store=configureStore({
    reducer:{
        cart:cartReducer,
        product:productReducer,
    },
});

export default store;