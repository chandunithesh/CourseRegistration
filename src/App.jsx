import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NareshIT from './NareshIT.jsx';
import RegistrationForm from './RegistrationForm.jsx';
import { CourseProvider } from './CourseContext.jsx';

function App() {
  return (
    <CourseProvider>
      <Router>
        <Routes>
          <Route path="/" element={<NareshIT />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
      </Router>
    </CourseProvider>
  );
}

export default App;
