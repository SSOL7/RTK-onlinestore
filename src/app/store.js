import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/Productslice';
import cartReducer from '../features/cartSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
  devTools: true,
});
