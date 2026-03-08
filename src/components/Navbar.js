import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/store-logo.png";

const Navbar = ({ cartCount }) => (
  <nav className="navbar">
    <div className="logo-section">
      <img src={logo} alt="Store Logo" className="logo" />
      <h2 >Gym Supplement Store</h2>
    </div>
    <ul className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/About">About</Link>
      <Link to="/cart">Cart ({cartCount})</Link>
    </ul>
  </nav>
);

export default Navbar;