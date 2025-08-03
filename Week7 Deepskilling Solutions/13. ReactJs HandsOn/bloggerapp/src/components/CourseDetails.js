import React from 'react';

const CourseDetails = () => {
  const courses = ['ReactJS', 'Spring Boot', 'MySQL'];

  return (
    <div>
      <h2>Course Details</h2>
      {courses.length && (
        <ul>
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CourseDetails;
