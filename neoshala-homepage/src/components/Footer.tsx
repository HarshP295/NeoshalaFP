import React from 'react';
import './Footer.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => (
  <footer id="footer" className="footer">
    <div className="footer-col logo-col">
      <div className="logo">NeoShala</div>
    </div>

    <div className="footer-col links-col">
      <h4>Quick Links</h4>
      <a href=".nav">Home</a>
      <a href="#aboutUs">About us</a>
      <a href="#reviews">Reviews</a>
      <a href="#contact">Contact Us</a>
    </div>

    <div className="footer-col contact-col">
      <h4>Contact us</h4>
      <div className="contact-item">
        <FaMapMarkerAlt />
        <span>
          Vivekanand Education Society's Institute Of Technology,<br />
          Hashu Advani Memorial Complex, Collector's Colony,<br />
          Chembur, Mumbai, Maharashtra, 400074
        </span>
      </div>
      <div className="contact-item">
        <FaPhone />
        <span>+91 8454845481</span>
      </div>
      <div className="contact-item">
        <FaEnvelope />
        <span>neoshala@gmail.com</span>
      </div>
    </div>
  </footer>
);

export default Footer;