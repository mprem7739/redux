import React, { useState } from 'react';
import './Home.css'; 

const Home = () => {
  const [hovered, setHovered] = useState(null);

  const courses = [
    { id: 1, name: "React for Beginners", imageUrl: "https://courses.tutorialswebsite.com/assets/front/img/category/reactjs-banner.jpeg" },
    { id: 2, name: "Advanced JavaScript", imageUrl: "https://i.ytimg.com/vi/r5EdxMdENqI/maxresdefault.jpg" },
    { id: 3, name: "Web Development Bootcamp", imageUrl: "https://i0.wp.com/uncookednews.com/wp-content/uploads/2021/06/is-web-development-bootcamp-worth-it.jpeg?fit=1200%2C630&ssl=1" },
    { id: 4, name: "Data Science with Python", imageUrl: "https://daxg39y63pxwu.cloudfront.net/images/blog/python-for-data-science/Python_for_Data_Science.png" },
    { id: 5, name: "Machine Learning Basics", imageUrl: "https://i.ytimg.com/vi/hjh1ikznScg/maxresdefault.jpg" },
  ];

  return (
    <div className="home-container">
      <h1>Available Courses</h1>
      <div className="course-grid">
        {courses.map(course => (
          <div 
            key={course.id} 
            className={`course-box ${hovered === course.id ? 'hovered' : ''}`} 
            onMouseEnter={() => setHovered(course.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={course.imageUrl} alt={course.name} className="course-image" />
            <div className="course-name">{course.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
