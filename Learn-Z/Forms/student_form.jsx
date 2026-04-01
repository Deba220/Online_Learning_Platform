import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaSchool, FaBook, FaGraduationCap } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../src/assets/feature3.png'
import './student_form.css'

const StudentForm = ({ onLoginClick }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    institution: '',
    course: '',
    agreeToTerms: false
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); 

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    if (!formData.firstName || !formData.lastName || !formData.email ||
      !formData.password || !formData.institution || !formData.course ||
      !formData.agreeToTerms) {
      setError('Please fill in all required fields.');
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validateForm()) return;

    try {
      const response = await axios.post('http://localhost:5000/api/register', formData);
      toast.success(response.data.message); // Show success toast
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        institution: '',
        course: '',
        agreeToTerms: false
      });
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed'); // Show error toast
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="left-panel">
          <div className="logo">
            <p className="logo-icon" ></p>
              Learn_Z Connect
            <p/>
          </div>
          <img 
            src={Logo} 
            className="illustration" 
            alt="Students studying" 
          />
          <h2>Join Our Learning Community</h2>
          <p>Access exclusive resources, connect with peers, and enhance your educational journey.</p>
        </div>
        
        <div className="right-panel">
          <h2>Create Your Student Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="half-width">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <div className="input-with-icon">
                  <FaUser className="input-icon" />
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName"
                    placeholder="Enter your first name" 
                    value={formData.firstName}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <div className="input-with-icon">
                  <FaUser className="input-icon" />
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName"
                    placeholder="Enter your last name" 
                    value={formData.lastName}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-with-icon">
                <FaEnvelope className="input-icon" />
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  placeholder="Enter your email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-with-icon">
                <FaLock className="input-icon" />
                <input 
                  type="password" 
                  id="password" 
                  name="password"
                  placeholder="Create a strong password" 
                  value={formData.password}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
            
            <div className="half-width">
              <div className="form-group">
                <label htmlFor="institution">Institution</label>
                <div className="input-with-icon">
                  <FaSchool className="input-icon" />
                  <input 
                    type="text" 
                    id="institution" 
                    name="institution"
                    placeholder="Your school/college" 
                    value={formData.institution}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="course">Course of Study</label>
                <div className="input-with-icon">
                  <FaBook className="input-icon" />
                  <select 
                    id="course" 
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select your course</option>
                    <option value="cs">Computer Science</option>
                    <option value="eng">Engineering</option>
                    <option value="bus">Business</option>
                    <option value="med">Medicine</option>
                    <option value="art">Arts & Humanities</option>
                    <option value="sci">Natural Sciences</option>
                    <option value="law">Law</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="terms">
              <input 
                type="checkbox" 
                id="terms" 
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required 
              />
              <label htmlFor="terms">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
            </div>
            
            <button type="submit" className="btn-signup">Create Account</button>
            {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
            {success && <div style={{ color: 'green', marginTop: '10px' }}>{success}</div>}
            <div className="login-link">
              Already have an account?{' '}
              <a href="#" onClick={e => { e.preventDefault(); onLoginClick(); }}>
                Log In
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default StudentForm
