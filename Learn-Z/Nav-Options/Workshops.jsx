import React, { useState, useEffect } from 'react';
import './Workshops.css';

// CountdownTimer component for the workshop countdown
const CountdownTimer = () => {
  const targetDate = new Date('2025-10-05T00:00:00+05:30'); // Oct 5, 2025, IST
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown">
      <div className="countdown-item">
        <span>{String(timeLeft.days).padStart(2, '0')}</span>
        <span>Days</span>
      </div>
      <div className="countdown-item">
        <span>{String(timeLeft.hours).padStart(2, '0')}</span>
        <span>Hours</span>
      </div>
      <div className="countdown-item">
        <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span>Minutes</span>
      </div>
      <div className="countdown-item">
        <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
        <span>Seconds</span>
      </div>
    </div>
  );
};

// Main Workshops component
const Workshops = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>Hands-on Workshop: Data Science with Python</h1>
        <p>Interactive coding & projects • Join live or watch later</p>
      </header>

      <div className="main-content">
        <div className="workshop-info">
          <h2>Workshop Details</h2>
          <p>
            In this 3-hour workshop, participants will learn the basics of data analysis and visualization using Python libraries like Pandas and Matplotlib. Bring your laptop and be ready to code!
          </p>
          <CountdownTimer />
          <button className="join-btn">Join Workshop</button>
          <div className="qa-section">
            <h3>Ask a Question</h3>
            <div className="qa-input">
              <input type="text" placeholder="Ask" className="qa-input-field" />
              <button className="ask-btn">Ask</button>
            </div>
          </div>
          <div className="feedback-section">
            <h3>Feedback</h3>
            <button className="feedback-btn">Submit Feedback</button>
          </div>
        </div>

        <div className="register-section">
          <h2>Register Now</h2>
          <p>Reserve your spot for this hands-on session.</p>
          <div className="register-form">
            <input type="text" placeholder="Full Name" className="form-input" />
            <input type="email" placeholder="Email" className="form-input" />
            <button className="register-btn">Register</button>
          </div>
          <div className="workshop-details">
            <p><strong>Date:</strong> Oct 5, 2025</p>
            <p><strong>Duration:</strong> 3 hours</p>
            <p><strong>Level:</strong> Beginner-friendly</p>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>© 2025 Course Workshop platform | ITI all rights reserved</p>
      </footer>
    </div>
  );
};

export default Workshops;