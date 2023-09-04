import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const api ='https://fakestoreapi.com/products';

const initialState = {
    products: []
};

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await axios.get(api);
        const data = await response.data;
        return data;
    });

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    // this is where direct logic goes
    reducers: {},
    // this is where async logic goes
    extraReducers: (builder) => {(
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;

        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.products = [];
        })
    )}
});

export default productsSlice.reducer;

