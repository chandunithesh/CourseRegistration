/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from 'react';
import './RegistrationForm.css';
import { CourseContext } from './CourseContext.jsx';


const RegistrationForm = () => {
  const { selectedCourse } = useContext(CourseContext);
  const [courseName, setCourseName] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (selectedCourse) setCourseName(selectedCourse.name);
  }, [selectedCourse]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!courseName) return setMessage('Please select a course first.');

    const payload = { ...formData, course: courseName };

    try {
      const response = await fetch('https://formspree.io/f/mwpbregb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setMessage('Registration successful! We will contact you soon.');
        setFormData({ name: '', email: '', phone: '' });
      } else {
        setMessage('Failed to submit. Please try again.');
      }
    } catch (error) {
      setMessage('Error submitting the form.');
    }
  };

  if (!selectedCourse) return <p>Please select a course first!</p>;

  return (
    <div className="registration-container">
      <h1>Register for {courseName}</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
         
        <label>Course Name:</label>
       <input type="text" name="course name" value={formData.coursename} onChange= {handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Phone:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>

      {message && (
        <p className={message.includes('successful') ? 'success' : 'error'}>
          {message}
        </p>
      )}
    </div>
  );
};

export default RegistrationForm;