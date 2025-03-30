import { useEffect, useRef, useState } from 'react';
import './Reviews.css';

const reviews = [
  {
    id: 1,
    image: '/coaching.jpg',
    text: 'Neoshala is a pioneering platform designed to bridge this gap by aggregating offline non-academic coaching services across major Indian cities.',
  },
  {
    id: 2,
    image: '/coaching.jpg',
    text: 'Neoshala offers a seamless and user-friendly experience to discover and book sessions.',
  },
  {
    id: 3,
    image: '/coaching.jpg',
    text: 'Whether it’s swimming, dance, or personal development – Neoshala brings it all together.',
  },
];

export default function Reviews() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollToIndex = (i: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: carouselRef.current.offsetWidth * i,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const next = (prevIndex + 1) % reviews.length;
        scrollToIndex(next);
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleArrowClick = (direction: 'left' | 'right') => {
    const nextIndex =
      direction === 'left' ? (index - 1 + reviews.length) % reviews.length : (index + 1) % reviews.length;
    setIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  return (
    <section id="reviews" className="reviews">
      <h2>Reviews</h2>
      <div style={{ position: 'relative' }}>
      <button
  className="arrow-btn"
  style={{ left: '1rem' }}
  onClick={() => handleArrowClick('left')}
>
  ❮
</button>

<button
  className="arrow-btn"
  style={{ right: '1rem' }}
  onClick={() => handleArrowClick('right')}
>
  ❯
</button>


        <div
          className="carousel-container"
          ref={carouselRef}
        >
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-content">
                <img src={review.image} alt="Review" className="review-img" />
                <p>{review.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}