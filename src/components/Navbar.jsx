import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const count = useSelector((s) => s.cart.items.reduce((sum, i) => sum + i.qty, 0));

  return (
    <nav className="nav">
      <Link className="brand" to="/">📚 Bookstore</Link>
      <div className="links">
        <NavLink to="/books">Books</NavLink>
        <NavLink to="/cart">Cart ({count})</NavLink>
      </div>
    </nav>
  );
}