import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    age: '',
    loginType: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    contact: '',
    email: '',
    age: '',
    loginType: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'email':
        return value
          ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
            ? ''
            : 'Invalid email format'
          : 'Email is required';
      case 'contact':
        return value
          ? /^\d{10}$/.test(value)
            ? ''
            : 'Contact must be 10 digits'
          : 'Contact is required';
      case 'age':
        return value
          ? /^\d+$/.test(value)
            ? ''
            : 'Age must be a number'
          : 'Age is required';
      default:
        return value ? '' : `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const message = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: message }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: any = {};
    Object.entries(formData).forEach(([key, value]) => {
      newErrors[key] = validateField(key, value);
    });
    setErrors(newErrors);

    const isValid = Object.values(newErrors).every(err => err === '');
    if (isValid) {
      alert('Form submitted successfully!');
      console.log(formData);
    } else {
      alert('Please correct the errors before submitting.');
    }
  };

  const formValid =
    Object.values(formData).every(value => value.trim() !== '') &&
    Object.values(errors).every(err => err === '');

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Sign Up</h2>
        <form className="signup-form" onSubmit={handleSubmit} noValidate>
          {[
            { label: 'Name', name: 'name', type: 'text' },
            { label: 'Contact No.', name: 'contact', type: 'text' },
            { label: 'Email', name: 'email', type: 'email' },
            { label: 'Age', name: 'age', type: 'text' },
          ].map(({ label, name, type }) => (
            <div key={name}>
              <label className="form-label">
                {label} <span className="required-star">*</span>
              </label>
              <input
                type={type}
                name={name}
                value={formData[name as keyof typeof formData]}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors[name as keyof typeof errors] && (
                <span className="error">{errors[name as keyof typeof errors]}</span>
              )}
            </div>
          ))}

          <div>
            <label className="form-label">
              Select Login <span className="required-star">*</span>
            </label>
            <select
              name="loginType"
              value={formData.loginType}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            >
              <option value="">Select Login</option>
              <option value="student">Student</option>
              <option value="trainer">Trainer</option>
              <option value="admin">Admin</option>
            </select>
            {errors.loginType && <span className="error">{errors.loginType}</span>}
          </div>

          <button type="submit" disabled={!formValid}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;