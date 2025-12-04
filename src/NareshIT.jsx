import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CourseContext } from './CourseContext.jsx';
import './Styles.css';

const courses = [
  {
    name: "Full Stack Java",
    subjects: ["Java Basics", "Spring Boot", "Hibernate", "Front-end with React", "MySQL / MongoDB", "Project Work"],
    duration: "6 Months",
    fee: "45,000 ₹",
    mode: "Online / Offline"
  },
  {
    name: "Full Stack Python",
    subjects: ["Python Basics", "Django / Flask", "Front-end with React", "REST API Development", "PostgreSQL / MongoDB", "Project Work"],
    duration: "6 Months",
    fee: "50,000 ₹",
    mode: "Online / Offline"
  },
  {
    name: "Full Stack MERN",
    subjects: ["HTML, CSS, JavaScript", "React.js", "Node.js & Express", "MongoDB", "API Development", "Real-world Projects"],
    duration: "5 Months",
    fee: "55,000 ₹",
    mode: "Online / Offline"
  }
];

const NareshIT = () => {
  const { setSelectedCourse } = useContext(CourseContext);

  return (
    <div className="main-container">
      {courses.map((course, index) => (
        <div className="course-box" key={index}>
          <h1>{course.name}</h1>

          <h2>📘 Subjects / Topics</h2>
          <ul>
            {course.subjects.map((subject, idx) => (
              <li key={idx}>{subject}</li>
            ))}
          </ul>

          <h2>⏳ Duration</h2>
          <p>{course.duration}</p>

          <h2>💰 Course Fee</h2>
          <p>{course.fee}</p>

          <h2>📍 Mode</h2>
          <p>{course.mode}</p>

          <div className="button-box">
            <Link 
              to="/register" 
              className="btn" 
              onClick={() => setSelectedCourse(course)}
            >
              Register Now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NareshIT;
