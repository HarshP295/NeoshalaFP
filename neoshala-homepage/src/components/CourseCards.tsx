import React from 'react';
import './CourseCards.css';
import CourseImage from '../assets/coaching.jpg';

interface CourseCardProps {
  id: number;
  courseName: string;
  trainerName: string;
  duration: string;
  timing: string;
  pricing: string;
  rating: number;
  imageUrl: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  courseName,
  trainerName,
  duration,
  timing,
  pricing,
  rating,
  imageUrl
}) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? 'filled' : ''}`}>
          {i <= rating ? '★' : '☆'}
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="course-card">
      <button className="favorite-btn">♡</button>
      <div className="course-image-container">
        <img src={imageUrl} alt={courseName} className="course-image" />
      </div>
      <div className="course-details">
        <h3 className="course-name">{courseName}</h3>
        <p className="trainer-name">By {trainerName}</p>
        <p className="duration">Duration: {duration}</p>
        <p className="timing">Schedule: {timing}</p>
        <p className="pricing">Price: {pricing}</p>
      </div>
      <div className="course-footer">
        <div className="rating">{renderStars()}</div>
        <button className="add-to-cart">🛒</button>
      </div>
    </div>
  );
};

const CourseCards: React.FC = () => {
  const courses: CourseCardProps[] = [
    {
      id: 1,
      courseName: 'Yoga for Beginners',
      trainerName: 'Jane Smith',
      duration: '8 weeks',
      timing: 'Mon & Wed, 6-7 PM',
      pricing: '$89.99',
      rating: 4,
      imageUrl: CourseImage
    },
    {
      id: 2,
      courseName: 'Advanced Pilates',
      trainerName: 'Michael Johnson',
      duration: '6 weeks',
      timing: 'Tue & Thu, 7-8 AM',
      pricing: '$109.99',
      rating: 5,
      imageUrl: CourseImage
    },
    {
      id: 3,
      courseName: 'Mindfulness Meditation',
      trainerName: 'Sarah Williams',
      duration: '4 weeks',
      timing: 'Sat, 9-10 AM',
      pricing: '$59.99',
      rating: 4,
      imageUrl: CourseImage
    },
    {
      id: 4,
      courseName: 'HIIT Workout',
      trainerName: 'David Chen',
      duration: '5 weeks',
      timing: 'Mon, Wed, Fri 5-6 PM',
      pricing: '$79.99',
      rating: 3,
      imageUrl: CourseImage
    },
    {
      id: 5,
      courseName: 'Nutrition Fundamentals',
      trainerName: 'Emily Parker',
      duration: '10 weeks',
      timing: 'Sun, 2-3 PM',
      pricing: '$129.99',
      rating: 5,
      imageUrl: CourseImage
    },
    {
      id: 6,
      courseName: 'Dance Fitness',
      trainerName: 'Carlos Mendez',
      duration: '6 weeks',
      timing: 'Tue & Thu, 6-7 PM',
      pricing: '$89.99',
      rating: 4,
      imageUrl: CourseImage
    }
  ];

  return (
    <section className="courses-section">
    <div className="courses-container">
      {courses.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
    </section>
  );
};

export default CourseCards;