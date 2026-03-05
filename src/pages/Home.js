import "./Home.css";
import proteinOffer from "../images/protein-offer.jpeg";
import { Link } from "react-router-dom";
import proteinImage from "../images/scoop.jpg";
const Home = () => {
  return (
    <>
      { /* Hero Section */}
      <div className="home-banner">
        <h1>FEATURED GYM SUPPLEMENTS 💪</h1>
        <p>Premium Supplements for Maximum Performance</p>
      </div>

      {/* Services Section */}
      <div className="services">
              <h1> Our Services </h1>
        <div className="service-card">
          <span className="icon">💳</span>
          <h3>Secure Payment</h3>
          <p>Your transactions are 100% safe and encrypted.</p>
        </div>

        <div className="service-card">
          <span className="icon">🚚</span>
          <h3>Free Shipping</h3>
          <p>Free delivery on all orders above Rs. 2000.</p>
        </div>

        <div className="service-card">
          <span className="icon">📦</span>
          <h3>Delivered With Care</h3>
          <p>We pack products safely to avoid damage.</p>
        </div>

        <div className="service-card">
          <span className="icon">✅</span>
          <h3>100% Authentic</h3>
          <p>Only genuine and original supplements.</p>
        </div>
      </div>
      {/* Protein offer */}
      <div className="banner-section">
        <div className="banner-content">
          <h2>Big Protein Sale 💪</h2>
          <p>Up to 30% OFF on Whey Protein</p>
          <button className="banner-btn">
            <Link to="/products">Shop Now</Link>
          </button>
        </div>
      </div>
      <div className="info-section">
        <div className="info-image">
          <img src={proteinImage} alt="Protein Supplement" />
        </div>
      
        <div className="info-text">
          <h2>Why Choose Our Protein?</h2>
          <p>
            Our whey protein is made from high-quality ingredients that help
            you build muscle faster and recover better after workouts.
          </p>
          <button className="info-btn">Learn More</button>
        </div>
      </div>
      {/* Feedback Section */}
      <div className="feedback-section">
        <h2 className="feedback-title">What Our Customers Say 💬</h2>

        {/* Feedback 1 */}
        <div className="feedback-row">
          <div className="feedback-img">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
          </div>
          <div className="feedback-text">
            <p>
              “Best protein I’ve ever used! My recovery time improved a lot.”
            </p>
            <h4>- Rahul Sharma</h4>
          </div>
        </div>

        {/* Feedback 2 */}
        <div className="feedback-row reverse">
          <div className="feedback-img">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" />
          </div>
          <div className="feedback-text">
            <p>
              “Fast delivery and 100% authentic products. Highly recommended!”
            </p>
            <h4>- Priya Thapa</h4>
          </div>
        </div>

        {/* Feedback 3 */}
        <div className="feedback-row">
          <div className="feedback-img">
            <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="User" />
          </div>
          <div className="feedback-text">
            <p>
              “Affordable price and great quality supplements.”
            </p>
            <h4>- Ankit Verma</h4>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
