import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';
import { loadBooks } from '../features/BooksSlice';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import BookCard from '../components/BookCard';

export default function Books() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((s) => s.books);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [sortBy, setSortBy] = useState('title');

  useEffect(() => {
    if (status === 'idle') dispatch(loadBooks());
  }, [status, dispatch]);

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(items.map((b) => b.category)))],
    [items]
  );

  const filtered = useMemo(() => {
    let list = items;
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.author.toLowerCase().includes(q)
      );
    }
    if (category !== 'All') {
      list = list.filter((b) => b.category === category);
    }
    if (sortBy === 'price-asc') list = [...list].sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);
    else if (sortBy === 'rating') list = [...list].sort((a, b) => b.rating - a.rating);
    else list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    return list;
  }, [items, query, category, sortBy]);

  return (
    <div className="page">
      <div className="controls">
        <SearchBar value={query} onChange={setQuery} />
        <Filters
          category={category}
          categories={categories}
          onCategoryChange={setCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />
      </div>

      {status === 'loading' && <p>Loading...</p>}
      {error && (
        <div>
          <p role="alert">{error}</p>
          <button className="btn" onClick={() => dispatch(loadBooks())}>Retry</button>
        </div>
      )}

      <div className="grid">
        {filtered.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}