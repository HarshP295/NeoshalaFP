import { useEffect, useRef, useState } from 'react';

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
    <section className="reviews" style={{ padding: '2rem', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '2rem' }}>Reviews</h2>
      <div style={{ position: 'relative' }}>
      <button
  onClick={() => handleArrowClick('left')}
  style={{
    position: 'absolute',
    top: '50%',
    left: '20px',
    transform: 'translateY(-50%)',
    fontSize: '1.5rem',
    backgroundColor: '#D0B8AC',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '36px',
    height: '36px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
    transition: 'all 0.3s ease',
  }}
>
  ‹
</button>

<button
  onClick={() => handleArrowClick('right')}
  style={{
    position: 'absolute',
    top: '50%',
    right: '20px',
    transform: 'translateY(-50%)',
    fontSize: '1.5rem',
    backgroundColor: '#D0B8AC',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '36px',
    height: '36px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
    transition: 'all 0.3s ease',
  }}
>
  ›
</button>



        <div
          className="carousel-container"
          style={{
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            gap: '2rem',
            scrollbarWidth: 'none',
          }}
          ref={carouselRef}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="review-card"
              style={{
                flex: '0 0 100%',
                scrollSnapAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  backgroundColor: '#fff',
                  padding: '1.5rem',
                  borderRadius: '16px',
                  textAlign: 'center',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                  maxWidth: '320px',
                  width: '90%',
                  height: '340px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <img
                  src={review.image}
                  alt="Review"
                  style={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    marginBottom: '1rem',
                  }}
                />
                <p>{review.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
