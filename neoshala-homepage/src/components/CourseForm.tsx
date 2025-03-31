import React, { useState } from 'react';
import './CourseForm.css';

const CourseForm: React.FC = () => {
  const [formData, setFormData] = useState({
    courseName: '',
    duration: '',
    price: '',
    timings: '',
    address: '',
    capacity: '',
    description: '',
    photos: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, photos: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call to register the course)
    console.log('Form submitted:', formData);
    alert('Course registered successfully!');
  };

  return (
    <div className="form-container">
      <div className="header1">
        <h1 className="logo1">Neoshala.com</h1>
        <h2>New Course Registration Form</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="courseName">Name of the Course<span>*</span></label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="duration">Duration<span>*</span></label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="e.g., 3 months"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price<span>*</span></label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="e.g., $500"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="timings">Timings<span>*</span></label>
          <input
            type="text"
            id="timings"
            name="timings"
            value={formData.timings}
            onChange={handleChange}
            placeholder="e.g., 10:00 AM - 12:00 PM"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address<span>*</span></label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="capacity">Capacity<span>*</span></label>
          <input
            type="number"
            id="capacity"
            name="capacity"
            value={formData.capacity}
            onChange={handleChange}
            placeholder="e.g., 30"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description of the Class<span>*</span></label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Explain about the classes"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="photos">Photos of the Class</label>
          <input
            type="file"
            id="photos"
            name="photos"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default CourseForm;