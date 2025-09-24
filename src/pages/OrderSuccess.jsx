import { Link, useSearchParams } from 'react-router-dom';

export default function OrderSuccess() {
  const [params] = useSearchParams();
  const id = params.get('orderId');

  return (
    <div className="page" style={{ textAlign: 'center' }}>
      <h1>🎉 Order placed!</h1>
      <p>Your order ID is <strong>{id}</strong></p>
      <Link className="btn" to="/">Back to Home</Link>
    </div>
  );
}