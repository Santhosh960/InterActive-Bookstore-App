import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../features/BooksSlice';
import cartReducer from '../features/CartSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    cart: cartReducer,
  },
});

// Persist cart to localStorage
store.subscribe(() => {
  localStorage.setItem('cart', JSON.stringify(store.getState().cart));
});