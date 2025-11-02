import React from 'react';
import '../CSS/WhyChoose.css';

const WhyChoose = () => {
  return (
    <div className="why-choose-container">
      <h2>Why Choose LearnHub?</h2>
      <div className="why-choose-boxes">
        <div className="why-box">
          <i className="fa fa-chalkboard-teacher"></i>
          <h3>Expert Instructors</h3>
          <p>Learn from industry professionals with real-world experience.</p>
        </div>
        <div className="why-box">
          <i className="fa fa-clock"></i>
          <h3>Flexible Learning</h3>
          <p>Access courses anytime, anywhere, and learn at your own pace.</p>
        </div>
        <div className="why-box">
          <i className="fa fa-laptop"></i>
          <h3>Interactive Platform</h3>
          <p>Hands-on projects, quizzes, and responsive design support.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
