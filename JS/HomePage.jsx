import React from 'react';
import '../CSS/HomePage.css';
import Header from './Header';
import Footer from './Footer';

// Images
import javaImg from '../IMAGE/java.jpg';
import reactImg from '../IMAGE/react.jpg';
import pythonImg from '../IMAGE/python.jpg';

function HomePage() {
    return (
        <>
            <Header />
            <div className="homepage-container">
                <h1 className="welcome-heading">
                    Unlock Your Potential with <span className="highlight">LearnHub</span>
                </h1>
                <p className="sub-heading">
                    Join thousands of learners and start mastering new skills today!
                </p>

                <div className="course-card-container">
                    <div className="course-card">
                        <img src={javaImg} alt="Core Java" />
                        <h3>Core Java</h3>
                        <p><strong>Category:</strong> Programming</p>
                        <p><strong>Level:</strong> Intermediate</p>
                        <p>OOP, collections, and Java apps.</p>
                        <button className="enroll-btn">Enroll Now</button>
                    </div>

                    <div className="course-card">
                        <img src={reactImg} alt="React for Beginners" />
                        <h3>React for Beginners</h3>
                        <p><strong>Category:</strong> Frontend</p>
                        <p><strong>Level:</strong> Beginner</p>
                        <p>Learn the basics of React step-by-step.</p>
                        <button className="enroll-btn">Enroll Now</button>
                    </div>

                    <div className="course-card">
                        <img src={pythonImg} alt="Python Basics" />
                        <h3>Python Basics</h3>
                        <p><strong>Category:</strong> Programming</p>
                        <p><strong>Level:</strong> Beginner</p>
                        <p>Get started with Python for web and data.</p>
                        <button className="enroll-btn">Enroll Now</button>
                    </div>
                </div>
<div className="view-all-container">
    <button className="view-all-btn">View All Courses</button>
</div>


                <section className="why-choose-section">
                    <h2>Why Choose LearnHub?</h2>
                    <div className="why-card-container">
                        <div className="why-card">
                            <span>🎓</span>
                            <h4>Expert Instructors</h4>
                            <p>Learn from industry professionals with real-world experience.</p>
                        </div>
                        <div className="why-card">
                            <span>⏰</span>
                            <h4>Flexible Learning</h4>
                            <p>Access courses anytime, anywhere, and learn at your own pace.</p>
                        </div>
                        <div className="why-card">
                            <span>📱</span>
                            <h4>Interactive Platform</h4>
                            <p>Hands-on projects, quizzes, and responsive design support.</p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default HomePage;
