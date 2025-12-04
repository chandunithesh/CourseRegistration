// CourseContext.jsx
import React, { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <CourseContext.Provider value={{ selectedCourse, setSelectedCourse }}>
      {children}
    </CourseContext.Provider>
  );
};
