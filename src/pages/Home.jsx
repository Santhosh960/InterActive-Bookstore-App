import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page home">
      <h1>Welcome to the Bookstore</h1>
      <p>Discover your next favorite book.</p>
      <Link to="/books" className="btn primary">Browse Books</Link>
    </div>
  );
}