import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-col">
          <h3>Gym Supplement Store</h3>
          <p>
            Your trusted source for premium gym supplements, protein powders,
            creatine, pre-workout, and fitness essentials.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Protein</li>
            <li>Creatine</li>
            <li>Pre-Workout</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h4>Customer Support</h4>
          <ul>
            <li>Contact Us</li>
            <li>Return Policy</li>
            <li>Shipping Info</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h4>Account</h4>
          <ul>
            <li>My Account</li>
            <li>Login</li>
            <li>Register</li>
            <li>Track Order</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2026 Gym Supplement Store. All rights reserved.</p>
        <div className="social-icons">
          <span>🌐</span>
          <span>📘</span>
          <span>📸</span>
          <span>🐦</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;