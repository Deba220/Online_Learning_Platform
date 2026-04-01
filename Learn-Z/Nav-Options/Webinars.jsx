import React, { useState, useEffect } from 'react';
import './Webinars.css';

// CountdownTimer component for the webinar countdown
const CountdownTimer = () => {
  const targetDate = new Date('2025-10-01T15:00:00+05:30'); // Oct 1, 2025, 3:00 PM IST
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

// SpeakerCard component for individual speaker entries
const SpeakerCard = ({ name, title }) => {
  return (
    <div className="speaker-card">
      <h4 className="speaker-name">{name}</h4>
      <p className="speaker-title">{title}</p>
    </div>
  );
};

// Main Webinars component for Student Portal
const Webinars = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = ['Overview', 'Agenda', 'Speakers', 'Resources'];
  const speakers = [
    { name: 'Dr. Ayesha Rahman', title: 'Lead Instructor — Web Architecture' },
    { name: 'Riya Patel', title: 'UI/UX Specialist' },
    { name: 'William Clark', title: 'DevOps Engineer' },
  ];
  const agenda = [
    'Introduction & goals (10m)',
    'Project setup & folder structure (15m)',
    'Building UI components (30m)',
    'State management patterns (20m)',
    'Performance tips & deployment (15m)',
    'Q&A (20m)',
  ];
  const resources = [
    'Slide deck (PDF)',
    'Starter project (zip)',
    'Code examples (Github)',
  ];

  return (
    <div className="app">
      <header className="header">
        <h1>Live Webinar — Building Modern Web Apps</h1>
        <p>Hosted by eLibrary • Practical session + Q&A • Join live or register to get the recording</p>
      </header>

      <div className="main-content">
        <div className="webinar-info">
          <div className="countdown-section">
            <p className="starting-soon">Starting soon</p>
            <span className="camera-icon">🎥</span>
            <CountdownTimer />
            <button className="join-btn">Join Webinar</button>
          </div>

          <div className="tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'Overview' && (
            <div className="tab-content">
              <h3>Webinar summary</h3>
              <p>
                In this live session we'll build a modern web application step-by-step using HTML, CSS and JavaScript. We'll cover architecture, accessibility, performance and deployment strategies.
              </p>
              <div className="qa-section">
                <h4>Ask a question (visible locally)</h4>
                <div className="qa-input">
                  <input type="text" placeholder="Ask" className="qa-input-field" />
                  <button className="ask-btn">Ask</button>
                </div>
                <h4>Q & A (local)</h4>
                <p>No questions yet.</p>
              </div>
            </div>
          )}

          {activeTab === 'Agenda' && (
            <div className="tab-content">
              <h3>Agenda</h3>
              <ul className="agenda-list">
                {agenda.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'Speakers' && (
            <div className="tab-content">
              <h3>Speakers</h3>
              <div className="speakers-grid">
                {speakers.map((speaker, index) => (
                  <SpeakerCard key={index} name={speaker.name} title={speaker.title} />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Resources' && (
            <div className="tab-content">
              <h3>Resources</h3>
              <ul className="resources-list">
                {resources.map((resource, index) => (
                  <li key={index}>{resource}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="register-section">
          <h2>Register for this webinar</h2>
          <p>Fill your details and we'll email you the link and recording.</p>
          <p className="webinar-time">Webinar starts on: Oct 1, 2025 — 3:00 PM IST</p>
          <div className="register-form">
            <input type="text" placeholder="Full name" className="form-input" />
            <input type="email" placeholder="Email" className="form-input" />
            <select className="form-input">
              <option>Student</option>
              <option>Professional</option>
              <option>Instructor</option>
              <option>Other</option>
            </select>
            <button className="register-btn">Register & Save</button>
            <label className="reminder-checkbox">
              <input type="checkbox" />
              Remind me 1 hour before
            </label>
          </div>
          <p className="webinar-details">
            Duration: 2 hours • Format: Live + Recording<br />
            Seats: Unlimited • Level: Intermediate
          </p>
          <p className="help-text">
            Need help? Email <a href="mailto:support@elibrary.example">support@elibrary.example</a> or join community chat.
          </p>
        </div>
      </div>

      <footer className="footer">
        <p>© 2025 Webinar Dashboard | ITI all rights reserved</p>
      </footer>
    </div>
  );
};

export default Webinars;