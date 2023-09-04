import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/Productslice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
