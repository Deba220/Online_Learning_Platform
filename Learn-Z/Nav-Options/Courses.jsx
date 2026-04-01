import React from 'react'
import './courses.css'
import Course1 from '../src/assets/Courses1.png'
import Course2 from '../src/assets/Courses2.png'
import Course3 from '../src/assets/Courses3.png'
import Course4 from '../src/assets/Courses4.png'
import Course5 from '../src/assets/Courses5.png'
import Course6 from '../src/assets/Courses6.png'
import Course7 from '../src/assets/Courses7.png'
import Course8 from '../src/assets/Courses8.png'
import Course9 from '../src/assets/Courses9.png'
import Course10 from '../src/assets/Courses10.png'
import Course11 from '../src/assets/Courses11.png'
import Course12 from '../src/assets/Courses12.png'

const Courses = () => {
  return (
    <div>
      <header>
        <h1 id='header-text'>Explore Our Courses</h1>
      </header>

      <div className="search-container">
        <input type="text" placeholder="Search for courses..."/>
      </div>

      <div className="courses-container">
        <div className="course-card">
          <img src={Course1} alt="Web Development" className="course-image"/>
            <div className="course-content">
              <h3>Web Development Mastery</h3>
              <p>Learn HTML, CSS, JavaScript, and modern frameworks to build stunning websites.</p>
              <div className="course-meta">
                <span><i className="fas fa-clock"></i> 6 weeks</span>
                <span><i className="fas fa-level-up-alt"></i> Beginner</span>
              </div>
              <a href="#" className="enroll-btn">Enroll Now</a>
            </div>
        </div>

        <div className="course-card">
          <img src={Course2} alt="Data Science" className="course-image"/>
            <div className="course-content">
              <h3>Data Science Fundamentals</h3>
              <p>Master Python, data analysis, and machine learning to become a data scientist.</p>
              <div className="course-meta">
                <span><i className="fas fa-clock"></i> 8 weeks</span>
                <span><i className="fas fa-level-up-alt"></i> Intermediate</span>
              </div>
              <a href="#" className="enroll-btn">Enroll Now</a>
            </div>
        </div>

        <div className="course-card">
          <img src={Course3} alt="UI/UX Design" className="course-image"/>
            <div className="course-content">
              <h3>UI/UX Design Essentials</h3>
              <p>Design user-friendly interfaces with tools like Figma and Adobe XD.</p>
              <div className="course-meta">
                <span><i className="fas fa-clock"></i> 4 weeks</span>
                <span><i className="fas fa-level-up-alt"></i> Beginner</span>
              </div>
              <a href="#" className="enroll-btn">Enroll Now</a>
            </div>
        </div>

        <div className="course-card">
          <img src={Course4} alt="Python Programming" className="course-image"/>
            <div className="course-content">
              <h3>Python Programming</h3>
              <p>Learn Python from scratch and build real-world applications.</p>
              <div className="course-meta">
                <span><i className="fas fa-clock"></i> 5 weeks</span>
                <span><i className="fas fa-level-up-alt"></i> Beginner</span>
              </div>
              <a href="#" className="enroll-btn">Enroll Now</a>
            </div>
        </div>
        <div className="course-card">
          <img src={Course5} alt="Python Programming" className="course-image"/>
            <div className="course-content">
              <h3>Cybersecurity</h3>
              <p>Topics include network security, ethical hacking, digital forensics, and risk management.</p>
              <div className="course-meta">
                <span><i className="fas fa-clock"></i> 5 weeks</span>
                <span><i className="fas fa-level-up-alt"></i> Beginner</span>
              </div>
              <a href="#" className="enroll-btn">Enroll Now</a>
            </div>
        </div>
        <div className="course-card">
          <img src={Course6} alt="Python Programming" className="course-image"/>
            <div className="course-content">
              <h3>Cloud Computing</h3>
              <p>Focusing on services and platforms like AWS, Azure, and Google Cloud.</p>
              <div className="course-meta">
                <span><i className="fas fa-clock"></i> 5 weeks</span>
                <span><i className="fas fa-level-up-alt"></i> Beginner</span>
              </div>
              <a href="#" className="enroll-btn">Enroll Now</a>
            </div>
        </div>
        <div className="course-card">
          <img src={Course7} alt="Python Programming" className="course-image"/>
            <div className="course-content">
              <h3>Human Resource (HR) Management</h3>
              <p>Focuses on talent acquisition, employee development, labor relations, and compensation.</p>
              <div className="course-meta">
                <span><i className="fas fa-clock"></i> 5 weeks</span>
                <span><i className="fas fa-level-up-alt"></i> Beginner</span>
              </div>
              <a href="#" className="enroll-btn">Enroll Now</a>
            </div>
        </div>
        <div className="course-card">
          <img src={Course8} alt="Python Programming" className="course-image"/>
            <div className="course-content">
              <h3>Strategic Management</h3>
              <p>Long-term planning, policy implementation, and competitive analysis to ensure an organization's success.</p>
              <div className="course-meta">
                <span><i className="fas fa-clock"></i> 5 weeks</span>
                <span><i className="fas fa-level-up-alt"></i> Beginner</span>
              </div>
              <a href="#" className="enroll-btn">Enroll Now</a>
            </div>
        </div>
        <div className="course-card">
          <img src={Course9} alt="Python Programming" className="course-image"/>
            <div className="course-content">
              <h3>Entrepreneurship</h3>
              <p>The process of planning, launching, and managing a new business venture.</p>
              <div className="course-meta">
                <span><i className="fas fa-clock"></i> 5 weeks</span>
                <span><i className="fas fa-level-up-alt"></i> Beginner</span>
              </div>
              <a href="#" className="enroll-btn">Enroll Now</a>
            </div>
        </div>
        <div className="course-card">
          <img src={Course10} alt="Python Programming" className="course-image"/>
            <div className="course-content">
              <h3>International Business</h3>
              <p>The study of business activities that occur across national borders.</p>
              <div className="course-meta">
                <span><i className="fas fa-clock"></i> 5 weeks</span>
                <span><i className="fas fa-level-up-alt"></i> Beginner</span>
              </div>
              <a href="#" className="enroll-btn">Enroll Now</a>
            </div>
        </div>
        <div className="course-card">
          <img src={Course11} alt="Python Programming" className="course-image"/>
            <div className="course-content">
              <h3>Project Management</h3>
              <p> The discipline of planning, organizing, and managing resources to bring about the successful completion of a specific project.</p>
              <div className="course-meta">
                <span><i className="fas fa-clock"></i> 5 weeks</span>
                <span><i className="fas fa-level-up-alt"></i> Beginner</span>
              </div>
              <a href="#" className="enroll-btn">Enroll Now</a>
            </div>
        </div>
        <div className="course-card">
          <img src={Course12} alt="Python Programming" className="course-image"/>
            <div className="course-content">
              <h3>Operations & Supply Chain Management</h3>
              <p>The administration of business practices to create the highest level of efficiency, from production to delivery.</p>
              <div className="course-meta">
                <span><i className="fas fa-clock"></i> 5 weeks</span>
                <span><i className="fas fa-level-up-alt"></i> Beginner</span>
              </div>
              <a href="#" className="enroll-btn">Enroll Now</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Courses
