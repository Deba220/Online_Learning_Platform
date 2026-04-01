import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Courses from '../Nav-Options/Courses.jsx'; // Import Courses component
import Assignment from '../Nav-Options/Assignment.jsx'; // Import Assignment component
import Resource from '../Nav-Options/Resource.jsx'; // Import Resource component
import Profile from '../Profile/profile.jsx'; // Import Profile component
import StudentForm from '../Forms/student_form.jsx'; // Import StudentForm component
import SignInForm from '../Forms/SignInForm.jsx'; // Import SignInForm component
import TeachersForm from '../Forms/teachers_form.jsx'; // Import TeachersForm component
import TeacherPortal from '../Portal/teacher_portal.jsx'; // Import TeacherPortal component
import Navbar from '../Navbar/Navbar.jsx'; // Import Navbar component
import Hero from '../HeroSection/hero.jsx'; // Import Hero component
import Features from '../FeaturesSection/features.jsx'; // Import Features component
import ParticleBackground from '../src/components/ParticleBackground'; // Import ParticleBackground component
import './student_portal.css';

const StudentPortal = () => {
  const [activePage, setActivePage] = useState('Home');
  const [showSignIn, setShowSignIn] = useState(false);
  const [showTeacherForm, setShowTeacherForm] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [profileData, setProfileData] = useState(null);
  const [teacherData, setTeacherData] = useState(null);
  const [isTeacherLoggedIn, setIsTeacherLoggedIn] = useState(false);

  // Handler for sign up button (from profile or sign-in modal)
  const handleSignUp = () => {
    setShowSignIn(false);
    setActivePage('SignUp');
  };

  // Handler for login link in student form
  const handleShowSignIn = () => setShowSignIn(true);

  // Handler for closing sign in form
  const handleCloseSignIn = () => setShowSignIn(false);

  // Handler for successful sign in
  const handleSignInSuccess = (email) => {
    setUserEmail(email);
    setShowSignIn(false);
    setActivePage('Profile');
  };

  // Handler for teacher sign in button click
  const handleTeacherSignIn = () => {
    setShowTeacherForm(true);
    setActivePage('TeacherLogin');
  };

  // Handler for successful teacher login
  const handleTeacherLogin = (teacherData) => {
    setTeacherData(teacherData);
    setIsTeacherLoggedIn(true);
    setShowTeacherForm(false);
  };

  // Handler for going back from teacher form
  const handleBackFromTeacher = () => {
    setShowTeacherForm(false);
    setActivePage('Profile');
  };

  // Handler for teacher logout
  const handleTeacherLogout = () => {
    setIsTeacherLoggedIn(false);
    setTeacherData(null);
    setActivePage('Home');
  };

  // Fetch profile data when userEmail changes and Profile page is active
  useEffect(() => {
    if (activePage === 'Profile' && userEmail) {
      axios.get(`http://localhost:5000/api/profile?email=${userEmail}`)
        .then(res => setProfileData(res.data))
        .catch(() => setProfileData(null));
    }
  }, [activePage, userEmail]);

  // If teacher is logged in, show teacher portal
  if (isTeacherLoggedIn) {
    return (
      <div className='cointainer'>
        <ParticleBackground />
        <TeacherPortal teacher={teacherData} onLogout={handleTeacherLogout} />
      </div>
    );
  }

  return (
    <div className='cointainer'>
      <ParticleBackground />
      <Navbar onPageChange={setActivePage} />

      {activePage === 'Home' && (
        <>
          <Hero />
          <Features onViewCourses={() => {
  setActivePage('Courses');
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
}} />        </>
      )}
      {activePage === 'Courses' && <Courses />}
      {activePage === 'Assignment' && <Assignment />}
      {activePage === 'Resource' && <Resource />}
      {activePage === 'Profile' && (
        <Profile
          data={profileData}
          onSignUp={handleSignUp}
          onTeacherSignIn={handleTeacherSignIn}
        />
      )}
      {activePage === 'SignUp' && !showSignIn && (
        <StudentForm onLoginClick={handleShowSignIn} />
      )}
      {activePage === 'TeacherLogin' && showTeacherForm && (
        <TeachersForm
          onLogin={handleTeacherLogin}
          onBack={handleBackFromTeacher}
        />
      )}
      {showSignIn && (
        <SignInForm
          onClose={handleCloseSignIn}
          onSignUpClick={handleSignUp}
          onSignInSuccess={handleSignInSuccess}
        />
      )}
    </div>
  );
};

export default StudentPortal;