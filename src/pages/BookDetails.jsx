import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadBookById } from '../features/BooksSlice';
import { addToCart } from '../features/CartSlice';

export default function BookDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selected, items, status, error } = useSelector((s) => s.books);
  const book = selected || items.find((b) => String(b.id) === String(id));

  useEffect(() => {
    if (!book) dispatch(loadBookById(id));
  }, [book, id, dispatch]);

  if (status === 'loading' && !book) return <div className="page">Loading...</div>;
  if (error) return <div className="page">Error: {error}</div>;
  if (!book) return <div className="page">Not found.</div>;

  return (
    <div className="page">
      <div className="details">
        <img src={book.imageUrl} alt={book.title} className="cover-lg" />
        <div className="meta">
          <h1>{book.title}</h1>
          <p>by {book.author}</p>
          <p>Category: {book.category}</p>
          <p>⭐ {book.rating} · {book.reviews} reviews</p>
          <p className="desc">{book.description}</p>
          <h2>${book.price.toFixed(2)}</h2>
          <button className="btn primary" onClick={() => dispatch(addToCart(book))}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}