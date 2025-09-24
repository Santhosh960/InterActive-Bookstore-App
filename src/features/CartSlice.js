import { createSlice } from '@reduxjs/toolkit';

const persisted = typeof window !== 'undefined' ? window.localStorage.getItem('cart') : null;

const cartSlice = createSlice({
  name: 'cart',
  initialState: persisted ? JSON.parse(persisted) : { items: [] },
  reducers: {
    addToCart(state, action) {
      const book = action.payload;
      const existing = state.items.find((i) => i.id === book.id);
      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({
          id: book.id,
          title: book.title,
          price: book.price,
          imageUrl: book.imageUrl,
          qty: 1,
        });
      }
    },
    decreaseQty(state, action) {
      const id = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        item.qty -= 1;
        if (item.qty <= 0) {
          state.items = state.items.filter((i) => i.id !== id);
        }
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, decreaseQty, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;