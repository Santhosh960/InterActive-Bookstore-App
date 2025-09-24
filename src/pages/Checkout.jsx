import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../features/CartSlice';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const { items } = useSelector((s) => s.cart);
  const [form, setForm] = useState({ name: '', email: '', address: '', payment: 'card' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  if (!items.length) return <div className="page"><p>Your cart is empty.</p></div>;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderId = Math.random().toString(36).slice(2, 9).toUpperCase();
    // Simulate placing an order …
    dispatch(clearCart());
    navigate(`/order-success?orderId=${orderId}`);
  };

  return (
    <div className="page">
      <h1>Checkout</h1>
      <form className="checkout" onSubmit={handleSubmit}>
        <div className="field"><label>Name</label><input required name="name" value={form.name} onChange={handleChange} /></div>
        <div className="field"><label>Email</label><input required type="email" name="email" value={form.email} onChange={handleChange} /></div>
        <div className="field"><label>Address</label><textarea required name="address" value={form.address} onChange={handleChange} /></div>
        <div className="field">
          <label>Payment</label>
          <select name="payment" value={form.payment} onChange={handleChange}>
            <option value="card">Card</option>
            <option value="cod">Cash on Delivery</option>
          </select>
        </div>
        <p>Total: <strong>${total.toFixed(2)}</strong></p>
        <button className="btn primary" type="submit">Place order</button>
      </form>
    </div>
  );
}