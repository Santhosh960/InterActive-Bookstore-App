import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loadBooks = createAsyncThunk('books/load', async () => {
  const res = await fetch('/books.json');
  if (!res.ok) throw new Error('Failed to load books.');
  const data = await res.json();
  return data;
});

export const loadBookById = createAsyncThunk('books/loadOne', async (id, { getState }) => {
  const state = getState();
  const local = state.books.items.find((b) => String(b.id) === String(id));
  if (local) return local;
  const res = await fetch('/books.json');
  if (!res.ok) throw new Error('Failed to load books.');
  const data = await res.json();
  const found = data.find((b) => String(b.id) === String(id));
  if (!found) throw new Error('Book not found');
  return found;
});

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    selected: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadBooks.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(loadBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Error loading books';
      })
      .addCase(loadBookById.pending, (state) => {
        state.status = 'loading';
        state.error = null;
        state.selected = null;
      })
      .addCase(loadBookById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selected = action.payload;
      })
      .addCase(loadBookById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Error';
      });
  },
});

export default booksSlice.reducer;