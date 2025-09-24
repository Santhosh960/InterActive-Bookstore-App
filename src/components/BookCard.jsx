import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/CartSlice';

export default function BookCard({ book }) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <img src={book.imageUrl} alt={book.title} />
      <div className="card-body">
        <h3 className="title">{book.title}</h3>
        <p className="author">by {book.author}</p>
        <p className="price">
          ${book.price.toFixed(2)} · ⭐ {book.rating}
        </p>
      </div>
      <div className="actions">
        <Link to={`/books/${book.id}`} className="btn">Details</Link>
        <button className="btn primary" onClick={() => dispatch(addToCart(book))}>
          Add to cart
        </button>
      </div>
    </div>
  );
}