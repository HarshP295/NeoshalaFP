import React from 'react';
// import 'swiper/css';
// import 'swiper/css/navigation';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';
import CourseCards from './components/CourseCards';

const App = () => {
  return (
    <div className="app">
      <Header />
      <AboutUs />
      <Reviews />
      <CourseCards />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;