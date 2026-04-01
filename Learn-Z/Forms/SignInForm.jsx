import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './SignInForm.css';

const SignInForm = ({ onClose, onSignInSuccess, onSignUpClick }) => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  // Handle input changes
  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Please fill all the required fields.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/signin', formData);
      setSuccess(response.data.message);
      setFormData({ email: '', password: '', rememberMe: true });

      // Show SweetAlert on successful sign in
      Swal.fire({
        icon: 'success',
        title: 'Sign In Successful',
        text: response.data.message,
        timer: 1800,
        showConfirmButton: false
      });

      if (onSignInSuccess) {
        onSignInSuccess(formData.email);
      } else {
        onClose();
      }
    } catch (error) {
      console.error('SignIn error:', error);
      setError(error.response?.data?.message || 'SignIn failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signin-portal-container">
      <div className="signin-backdrop" onClick={onClose}></div>
      
      <div className="signin-modal">
        <div className="signin-header">
          <div className="signin-logo">
            <i className="fas fa-lock"></i>
          </div>
          <h2 className="signin-title">Welcome Back</h2>
          <p className="signin-subtitle">Sign in to continue to your account</p>
          <button type="button" className="signin-close-btn" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <div className="signin-body">
          {error && (
            <div className="signin-alert signin-alert-error">
              <i className="fas fa-exclamation-circle"></i>
              <span>{error}</span>
              <button type="button" onClick={() => setError('')}>
                <i className="fas fa-times"></i>
              </button>
            </div>
          )}
          
          {success && (
            <div className="signin-alert signin-alert-success">
              <i className="fas fa-check-circle"></i>
              <span>{success}</span>
              <button type="button" onClick={() => setSuccess('')}>
                <i className="fas fa-times"></i>
              </button>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="signin-form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                <i className="fas fa-envelope"></i> Email address
              </label>
              <div className="input-wrapper">
                <input 
                  type="email" 
                  className="form-input" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
                <i className="input-icon fas fa-envelope"></i>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                <i className="fas fa-key"></i> Password
              </label>
              <div className="input-wrapper">
                <input 
                  type="password" 
                  className="form-input" 
                  id="password" 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                />
                <i className="input-icon fas fa-key"></i>
              </div>
            </div>
            
            <div className="form-options">
              <div className="remember-me">
                <label className="checkbox-container">
                  <input 
                    type="checkbox" 
                    id="rememberMe" 
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  <span className="checkmark"></span>
                  Remember me
                </label>
              </div>
              
              <div className="forgot-password">
                <a href="#" className="forgot-link">Forgot password?</a>
              </div>
            </div>
            
            <div className="form-submit">
              <button 
                type="submit" 
                className={`signin-btn ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Signing In...
                  </>
                ) : (
                  <>
                    <i className="fas fa-sign-in-alt"></i>
                    Sign In
                  </>
                )}
              </button>
            </div>
            
            <div className="signin-divider">
              <span>Or continue with</span>
            </div>
            
            <div className="social-login">
              <button type="button" className="social-btn google-btn">
                <i className="fab fa-google"></i>
                Google
              </button>
              <button type="button" className="social-btn facebook-btn">
                <i className="fab fa-facebook-f"></i>
                Facebook
              </button>
            </div>
          </form>
        </div>
        
        <div className="signin-footer">
          <p>
            Don't have an account?{' '}
            <a
              href="#"
              className="signup-link"
              onClick={e => {
                e.preventDefault();
                onClose();      // Close the sign-in modal
                if (onSignUpClick) onSignUpClick(); // Open sign-up form
              }}
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;