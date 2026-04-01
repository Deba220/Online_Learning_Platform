import React, { useEffect, useState } from 'react';
import './profile.css';

const Profile = ({ data, onSignUp, onTeacherSignIn }) => {
    const [hasCheckedData, setHasCheckedData] = useState(false);

    useEffect(() => {
        // Only check once on component mount
        if (!hasCheckedData) {
            setHasCheckedData(true);
            if (!data && onSignUp) {
                onSignUp();
            }
        }
    }, [data, onSignUp, hasCheckedData]);

    if (!data) {
        return null; // Don't show loading, immediately trigger sign up
    }

    return (
        <div>
            <div className="profile-header">
                <img src="https://via.placeholder.com/120?text=User" alt="User Profile Picture" />
                <h2>{data.firstName} {data.lastName}</h2>
                <p>{data.institution}</p>
            </div>

            <div className="profile-details">
                <h3>Profile Information</h3>
                <div className="profile-info">
                    <div className="info-item">
                        <i className="fas fa-envelope"></i>
                        <span>{data.email}</span>
                    </div>
                    <div className="info-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>{data.institution}</span>
                    </div>
                    <div className="info-item">
                        <i className="fas fa-calendar-alt"></i>
                        <span>Member since: {new Date(data.createdAt).toLocaleDateString()}</span>
                    </div>
                </div>

                <h3>Course Progress</h3>
                <div className="progress-section">
                    {data.courses && data.courses.length > 0 ? (
                        data.courses.map((course, idx) => (
                            <div className="progress-card" key={idx}>
                                <h4>{course.courseName}</h4>
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{ width: course.enrollmentStatus === 'Completed' ? '100%' : '50%' }}></div>
                                </div>
                                <p>Status: {course.enrollmentStatus || 'Active'}</p>
                            </div>
                        ))
                    ) : (
                        <p>No courses enrolled yet.</p>
                    )}
                </div>

                <a href="#" className="edit-profile-btn">Edit Profile</a>
                <button className="signup-btn" onClick={onSignUp}>Sign Up</button>
                
                {/* Add Teacher Sign In Button */}
                <button 
                    className="teacher-signin-btn"
                    onClick={onTeacherSignIn}
                >
                    <i className="fas fa-chalkboard-teacher"></i>
                    Sign in as Teacher
                </button>
            </div>
        </div>
    );
};

export default Profile;