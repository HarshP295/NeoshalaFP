import React from 'react';
import './PurchasedCourses.css';

interface PurchasedCourse {
  id: number;
  courseName: string;
  trainerName: string;
  duration: string;
  schedule: string;
  price: string;
  purchaseDate: string;
  imageUrl: string;
}

const PurchasedCourseCard: React.FC<PurchasedCourse> = ({
  id,
  courseName,
  trainerName,
  duration,
  schedule,
  price,
  purchaseDate,
  imageUrl
}) => {
  return (
    <div className="purchased-course-card">
      <div className="course-image-container">
        <img src={imageUrl} alt={courseName} className="course-image" />
      </div>
      
      <div className="course-details">
        <div className="detail-row">
          <span className="detail-label">Course:</span>
          <span className="detail-value">{courseName}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Trainer:</span>
          <span className="detail-value">{trainerName}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Duration:</span>
          <span className="detail-value">{duration}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Schedule:</span>
          <span className="detail-value">{schedule}</span>
        </div>
      </div>
      
      <div className="course-meta">
        <div className="detail-row">
          <span className="detail-label">Price:</span>
          <span className="detail-value">{price}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Purchased on:</span>
          <span className="detail-value">{purchaseDate}</span>
        </div>
        <button className="access-btn">Go to Course</button>
      </div>
    </div>
  );
};

const PurchasedCourses: React.FC = () => {
  const purchasedCourses: PurchasedCourse[] = [
    {
      id: 1,
      courseName: 'Advanced React Patterns',
      trainerName: 'Alex Johnson',
      duration: '6 weeks',
      schedule: 'Mon & Wed, 2-3 PM',
      price: '$149.99',
      purchaseDate: 'Nov 15, 2023',
      imageUrl: 'https://via.placeholder.com/100'
    },
    {
      id: 2,
      courseName: 'UX Design Fundamentals',
      trainerName: 'Sarah Miller',
      duration: '8 weeks',
      schedule: 'Tue & Thu, 6-7 PM',
      price: '$129.99',
      purchaseDate: 'Dec 2, 2023',
      imageUrl: 'https://via.placeholder.com/100'
    },
    {
      id: 3,
      courseName: 'Data Science Bootcamp',
      trainerName: 'David Chen',
      duration: '12 weeks',
      schedule: 'Sat & Sun, 10 AM-12 PM',
      price: '$299.99',
      purchaseDate: 'Jan 10, 2024',
      imageUrl: 'https://via.placeholder.com/100'
    }
  ];

  return (
    <div className="purchased-courses-container">
      <h2 className="section-title">My Learning</h2>
      
      <div className="courses-list">
        {purchasedCourses.map((course) => (
          <PurchasedCourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

export default PurchasedCourses;