import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products", async () => {
  const data = await axios.get('https://dummyjson.com/products');
  return data.data.products;
});

const initialState = {
  items: [],
  status: undefined,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "success";
    });
  },
});

export default productSlice.reducer;