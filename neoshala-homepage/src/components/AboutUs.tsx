import './AboutUs.css';

const AboutUs = () => {
  return (
    <section id = "aboutUs" className="about-section">
      <div className="about-wrapper">
        <h2>
          What is <span className="highlight">NeoShala</span>?
        </h2>
        <p>
          Neoshala is a pioneering platform designed to bridge the gap by aggregating offline non-academic coaching
          services across major Indian cities. Whether it's swimming, karate, dance, music, stress management, yoga,
          or personal development, Neoshala provides a seamless and user-friendly experience for individuals to search,
          book, and pay for coaching services all in one place.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
