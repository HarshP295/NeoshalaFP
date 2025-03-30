import React from 'react';
import './Header.css';

const Header = () => (
  <header id = "header" className="header">
    <div className="logo">NeoShala</div>
    <nav className="nav">
      <a href=".nav">Home</a>
      <a href="#hero">About us</a>
      <a href="#reviews">Reviews</a>
      <a href="#contact">Contact Us</a>
      <button className="btn sign-in">Sign In</button>
      <button className="btn sign-up">Sign Up</button>
    </nav>
  </header>
);

export default Header;