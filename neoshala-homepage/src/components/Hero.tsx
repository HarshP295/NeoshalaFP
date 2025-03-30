import React from 'react';
import './Hero.css';
import heroImage from '/coaching.jpg';

const Hero = () => (
  <section className="hero">
    { <img src={heroImage} alt="hero" className="hero-img" /> }
    <div className="hero-text">
      <h1>What is NeoShala?</h1>
      <p>
        Neoshala is a pioneering platform designed to bridge the gap by aggregating offline non-academic coaching services across major Indian cities. Whether it's swimming, karate, dance, music, stress management, yoga, or personal development, Neoshala provides a seamless and user-friendly experience for individuals to search, book, and pay for coaching services all in one place.
      </p>
    </div>
  </section>
);

export default Hero;