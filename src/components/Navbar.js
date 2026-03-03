import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <h2>Gym Supplement Store</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </div>
    </nav>
  );
};

export default Navbar;