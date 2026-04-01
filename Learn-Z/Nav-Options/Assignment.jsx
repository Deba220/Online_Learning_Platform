import React, { useState } from 'react';
import './assignment.css';

const assignments = [
  { id: 1, course: 'Software Engineering', deadline: '10th Sept 2025', status: 'Pending', submitted: false },
  { id: 2, course: 'Illustration', deadline: '12th Sept 2025', status: 'Completed', submitted: true },
  { id: 3, course: 'Python Programming', deadline: '15th Sept 2025', status: 'Pending', submitted: false },
  { id: 4, course: 'Computer Networks', deadline: '18th Sept 2025', status: 'Pending', submitted: false },
  { id: 5, course: 'Operating Systems', deadline: '20th Sept 2025', status: 'Completed', submitted: true },
  { id: 6, course: 'Artificial Intelligence', deadline: '22nd Sept 2025', status: 'Pending', submitted: false },
  { id: 7, course: 'Web Development', deadline: '25th Sept 2025', status: 'Pending', submitted: false },
  { id: 8, course: 'Data Structures', deadline: '28th Sept 2025', status: 'Completed', submitted: true },
];

const AssignmentCard = ({ course, deadline, status, submitted, onToggleSubmit }) => {
  return (
    <div className={`assignment-card ${submitted ? 'submitted' : 'pending'}`}>
      <div className="card-header">
        <div className="course-icon">
          {course.charAt(0)}
        </div>
        <div className="course-info">
          <h3 className="course-title">{course}</h3>
          <span className={`badge ${submitted ? 'badge-success' : 'badge-warning'}`}>
            {submitted ? 'Submitted' : 'Pending'}
          </span>
        </div>
      </div>
      <div className="card-body">
        <div className="info-row">
          <span className="icon">⏰</span>
          <div>
            <p className="label">Deadline</p>
            <p className="deadline">{deadline}</p>
          </div>
        </div>
        <div className="info-row">
          <span className="icon">{submitted ? '✅' : '📝'}</span>
          <div>
            <p className="label">Status</p>
            <p className={`status ${status === 'Completed' ? 'text-success' : 'text-danger'}`}>
              {status}
            </p>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <button
          className={`submit-btn ${submitted ? 'disabled' : ''}`}
          disabled={submitted}
          onClick={() => onToggleSubmit()}
        >
          {submitted ? (
            <>
              <span className="btn-icon">✓</span>
              Submitted
            </>
          ) : (
            <>
              <span className="btn-icon">+</span>
              Submit Assignment
            </>
          )}
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [assignmentList, setAssignmentList] = useState(assignments);
  const [filter, setFilter] = useState('all');
  
  const handleToggleSubmit = (id) => {
    setAssignmentList(assignmentList.map(assignment => 
      assignment.id === id ? {...assignment, submitted: !assignment.submitted, status: assignment.submitted ? 'Pending' : 'Completed'} : assignment
    ));
  };
  
  const filteredAssignments = filter === 'all' 
    ? assignmentList 
    : assignmentList.filter(assignment => 
        filter === 'submitted' ? assignment.submitted : !assignment.submitted
      );

  return (
    <div className="assignment-container">
      {/* <header className="assignment-header">
        <div className="header-content">
          <h1 className="header-title">
            <span className="header-icon">📘</span>
            Student Assignment Portal
          </h1>
          <p className="header-subtitle">
            Welcome, Student! <span className="highlight">Manage and submit your assignments here.</span>
          </p>
        </div>
      </header> */}
      
      <main className="assignment-main">
        <div className="main-header">
          <h2 className="section-title">My Assignments</h2>
          <div className="filter-tabs">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Assignments
            </button>
            <button 
              className={`filter-btn ${filter === 'pending' ? 'active' : ''}`}
              onClick={() => setFilter('pending')}
            >
              Pending
            </button>
            <button 
              className={`filter-btn ${filter === 'submitted' ? 'active' : ''}`}
              onClick={() => setFilter('submitted')}
            >
              Submitted
            </button>
          </div>
        </div>
        
        <div className="assignment-grid">
          {filteredAssignments.map((assignment) => (
            <AssignmentCard
              key={assignment.id}
              course={assignment.course}
              deadline={assignment.deadline}
              status={assignment.status}
              submitted={assignment.submitted}
              onToggleSubmit={() => handleToggleSubmit(assignment.id)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;