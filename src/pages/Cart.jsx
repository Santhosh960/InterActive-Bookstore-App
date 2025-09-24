import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addToCart, decreaseQty, removeFromCart, clearCart } from '../features/CartSlice';

export default function Cart() {
  const { items } = useSelector((s) => s.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  if (!items.length) {
    return (
      <div className="page">
        <h2>Your cart is empty</h2>
        <Link className="btn" to="/books">Browse books</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>Shopping Cart</h1>
      <ul className="cart-list">
        {items.map((i) => (
          <li key={i.id} className="cart-item">
            <img src={i.imageUrl} alt={i.title} />
            <div className="grow">
              <h3>{i.title}</h3>
              <p>${i.price.toFixed(2)}</p>
              <div className="qty">
                <button onClick={() => dispatch(decreaseQty(i.id))}>-</button>
                <span>{i.qty}</span>
                <button onClick={() => dispatch(addToCart(i))}>+</button>
              </div>
              <button className="link" onClick={() => dispatch(removeFromCart(i.id))}>Remove</button>
            </div>
          </li>
        ))}
      </ul>

      <div className="summary">
        <p>Subtotal: <strong>${subtotal.toFixed(2)}</strong></p>
        <div className="actions">
          <button className="btn" onClick={() => dispatch(clearCart())}>Clear cart</button>
          <button className="btn primary" onClick={() => navigate('/checkout')}>Checkout</button>
        </div>
      </div>
    </div>
  );
}