import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    //total: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        add_to_cart: (state, action) => {
            state.cart = [...state.cart, action.payload];
        },
        RemoveItemFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        }
    },

    extraReducers: (builder) => {},

});

export const { add_to_cart, RemoveItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;