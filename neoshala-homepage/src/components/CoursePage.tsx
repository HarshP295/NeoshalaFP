import React, { useState } from 'react';

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

interface Module {
  id: number;
  title: string;
  duration: string;
  description: string;
  expanded?: boolean;
}

interface Trainer {
  name: string;
  credentials: string;
  bio: string;
  coursesCount: number;
  avatar: string;
}

interface Course {
  id: number;
  title: string;
  trainer: Trainer;
  rating: number;
  reviewsCount: number;
  studentsEnrolled: number;
  price: number;
  thumbnail: string;
  description: string;
  highlights: string[];
  outcomes: string[];
  modules: Module[];
  reviews: Review[];
}

const CoursePage: React.FC = () => {
  const [course, setCourse] = useState<Course>({
    id: 1,
    title: "Yoga for Beginners",
    trainer: {
      name: "Jane Smith",
      credentials: "Certified Yoga Instructor, 10+ years experience",
      bio: "Jane Smith is a certified yoga instructor with over a decade of experience teaching students of all levels. She specializes in Hatha and Vinyasa yoga and has helped thousands of students improve their flexibility, strength, and mindfulness through her classes.",
      coursesCount: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    rating: 4.5,
    reviewsCount: 128,
    studentsEnrolled: 1500,
    price: 89.99,
    thumbnail: "https://via.placeholder.com/800x450?text=Yoga+Course+Preview",
    description: "This 8-week beginner-friendly yoga course will introduce you to foundational poses, breathing techniques, and mindfulness practices. Perfect for those new to yoga or looking to refresh their basics.",
    highlights: [
      "8-week structured program",
      "Perfect for absolute beginners",
      "Improve flexibility and strength",
      "Learn proper breathing techniques",
      "Reduce stress and increase mindfulness"
    ],
    outcomes: [
      "Master 20+ foundational yoga poses",
      "Develop a consistent yoga practice",
      "Understand proper alignment and form",
      "Learn breathing techniques for relaxation",
      "Build strength and flexibility safely"
    ],
    modules: [
      {
        id: 1,
        title: "Introduction to Yoga",
        duration: "30 min",
        description: "Learn about the history of yoga, different styles, and what to expect from this course."
      },
      {
        id: 2,
        title: "Basic Poses & Alignment",
        duration: "45 min",
        description: "Master foundational poses like Mountain, Downward Dog, and Warrior with proper alignment."
      },
      {
        id: 3,
        title: "Breathing Techniques",
        duration: "35 min",
        description: "Discover pranayama breathing exercises to enhance your practice and reduce stress."
      },
      {
        id: 4,
        title: "Building a Flow",
        duration: "50 min",
        description: "Learn how to connect poses into a smooth, meditative flow sequence."
      },
      {
        id: 5,
        title: "Relaxation & Meditation",
        duration: "40 min",
        description: "Explore guided relaxation techniques and simple meditation practices."
      }
    ],
    reviews: [
      {
        id: 1,
        name: "Alex Johnson",
        rating: 5,
        date: "2023-10-15",
        comment: "Jane is an amazing instructor! Her explanations are clear and she makes yoga accessible for beginners. I've noticed significant improvements in my flexibility after just 4 weeks.",
        verified: true
      },
      {
        id: 2,
        name: "Sam Wilson",
        rating: 4,
        date: "2023-09-28",
        comment: "Great course overall. The only reason I'm not giving 5 stars is that I wish there were more modifications shown for some poses.",
        verified: true
      },
      {
        id: 3,
        name: "Taylor Green",
        rating: 5,
        date: "2023-09-10",
        comment: "Perfect pace for beginners. I love how each lesson builds on the previous one. The breathing techniques have helped me with my anxiety too!",
        verified: true
      }
    ]
  });

  const [activeReviewSort, setActiveReviewSort] = useState<string>('relevance');

  const toggleModule = (moduleId: number) => {
    setCourse(prev => ({
      ...prev,
      modules: prev.modules.map(m => 
        m.id === moduleId ? { ...m, expanded: !m.expanded } : m
      )
    }));
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<span key={i} className="star full">★</span>);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<span key={i} className="star half">★</span>);
      } else {
        stars.push(<span key={i} className="star empty">★</span>);
      }
    }
    
    return stars;
  };

  return (
    <div className="course-page">
      {/* Course Overview Section */}
      <section className="course-overview">
        <div className="breadcrumbs">Home / Yoga / Beginner</div>
        <h1 className="course-title">{course.title}</h1>
        <div className="trainer-info">
          <span className="trainer-name">By {course.trainer.name}</span>
          <span className="trainer-credentials">{course.trainer.credentials}</span>
        </div>
        
        <div className="rating-enrollment">
          <div className="rating">
            {renderStars(course.rating)}
            <span className="rating-value">{course.rating.toFixed(1)}</span>
            <span className="reviews-count">({course.reviewsCount} reviews)</span>
          </div>
          <div className="enrollment">
            <span className="students-count">{course.studentsEnrolled.toLocaleString()} students enrolled</span>
          </div>
        </div>
      </section>

      <div className="course-content">
        {/* Main content column */}
        <div className="main-content">
          {/* Course Preview Section */}
          <section className="course-preview">
            <div className="thumbnail-container">
              <img src={course.thumbnail} alt={course.title} className="course-thumbnail" />
            </div>
            
            <div className="course-description">
              <h2>About This Course</h2>
              <p>{course.description}</p>
              
              <h3>Course Highlights</h3>
              <ul className="highlights">
                {course.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
              
              <h3>What You'll Learn</h3>
              <ul className="outcomes">
                {course.outcomes.map((outcome, index) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Detailed Course Breakdown */}
          <section className="course-modules">
            <h2>Course Curriculum</h2>
            <div className="modules-list">
              {course.modules.map(module => (
                <div key={module.id} className={`module ${module.expanded ? 'expanded' : ''}`}>
                  <div className="module-header" onClick={() => toggleModule(module.id)}>
                    <h3 className="module-title">{module.title}</h3>
                    <span className="module-duration">{module.duration}</span>
                    <span className="toggle-icon">{module.expanded ? '−' : '+'}</span>
                  </div>
                  {module.expanded && (
                    <div className="module-content">
                      <p>{module.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Trainer Information Section */}
          <section className="trainer-section">
            <h2>About the Trainer</h2>
            <div className="trainer-details">
              <img src={course.trainer.avatar} alt={course.trainer.name} className="trainer-avatar" />
              <div className="trainer-bio">
                <h3>{course.trainer.name}</h3>
                <p className="credentials">{course.trainer.credentials}</p>
                <p>{course.trainer.bio}</p>
                <a href="#" className="more-courses">View all {course.trainer.coursesCount} courses by {course.trainer.name}</a>
              </div>
            </div>
          </section>

          {/* Student Reviews & Testimonials */}
          <section className="reviews-section">
            <div className="reviews-header">
              <h2>Student Reviews</h2>
              <div className="reviews-sort">
                <span>Sort by:</span>
                <button 
                  className={activeReviewSort === 'relevance' ? 'active' : ''}
                  onClick={() => setActiveReviewSort('relevance')}
                >
                  Relevance
                </button>
                <button 
                  className={activeReviewSort === 'rating' ? 'active' : ''}
                  onClick={() => setActiveReviewSort('rating')}
                >
                  Highest Rating
                </button>
                <button 
                  className={activeReviewSort === 'date' ? 'active' : ''}
                  onClick={() => setActiveReviewSort('date')}
                >
                  Most Recent
                </button>
              </div>
            </div>
            
            <div className="average-rating">
              <div className="rating-value">{course.rating.toFixed(1)}</div>
              <div className="stars">{renderStars(course.rating)}</div>
              <div className="total-reviews">Based on {course.reviewsCount} reviews</div>
            </div>
            
            <div className="reviews-list">
              {course.reviews.map(review => (
                <div key={review.id} className="review">
                  <div className="review-header">
                    <span className="reviewer-name">{review.name}</span>
                    {review.verified && <span className="verified-badge">✓ Verified</span>}
                    <div className="review-rating">{renderStars(review.rating)}</div>
                    <span className="review-date">{review.date}</span>
                  </div>
                  <p className="review-comment">{review.comment}</p>
                </div>
              ))}
            </div>
            
            <button className="load-more">Load More Reviews</button>
          </section>
        </div>

        {/* Sidebar with pricing and enrollment */}
        <div className="sidebar">
          <div className="pricing-card">
            <div className="current-price">${course.price.toFixed(2)}</div>
            
            <div className="enrollment-buttons">
              <button className="add-to-courses">Add to My Courses</button>
              <button className="wishlist">❤ Add to Wishlist</button>
            </div>
            
            <div className="course-details">
              <h3>This course includes:</h3>
              <ul>
                <li>8 weeks of live instruction</li>
                <li>16 on-demand video sessions</li>
                <li>Downloadable practice guides</li>
                <li>Certificate of completion</li>
                <li>Access on mobile and desktop</li>
              </ul>
            </div>
            
            <div className="share-options">
              <span>Share this course:</span>
              <button className="share-button facebook">f</button>
              <button className="share-button twitter">t</button>
              <button className="share-button linkedin">in</button>
              <button className="share-button email">✉</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;