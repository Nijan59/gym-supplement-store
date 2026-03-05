import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-overlay">
        <div className="contact-container">
          <h1>Contact Us</h1>
          <p>Have questions? We’d love to hear from you.</p>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>\
          <div className="contact-info">
            <p>Email: info@gymsupplementstore.com</p>
            <p>Phone: +977-9803788873</p>
            <p>Location: Itahari, Nepal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;