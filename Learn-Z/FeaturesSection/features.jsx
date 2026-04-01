import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import './features.css'
import feature1 from '../src/assets/feature1.png'
import feature2 from '../src/assets/feature2.png'
import feature3 from '../src/assets/feature3.png'

const Features = ({ onViewCourses }) => {
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        // Animation trigger on scroll
        const handleScroll = () => {
            if (window.scrollY > 200 && !animated) {
                setAnimated(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [animated]);



    return (
        <div>
            {/* Features Section */}
            <section id="features" className="features-section">
                <div className="container mx-auto px-4">
                    <h2 className="section-title font-bold text-center mb-12">Why Choose Learn-Z?</h2>

                    <div className="feature-content">
                        <h1 className="feature-text text-5xl font-extrabold text-blue-100">Expert Instructors</h1>
                        <p className="feature-sub-text text-xl mb-6">Learn from industry professionals with real-world experience.</p>
                        <img src={feature1} alt="" className='feature1-img' />
                    </div>
                    <div className="feature-content">
                        <h1 className="feature-text1 text-5xl font-extrabold text-blue-100">Anytime, Anywhere Access</h1>
                        <p className="feature-sub-text1 text-xl mb-6">Learners can access materials and courses from any device.</p>
                        <img src={feature2} alt="" className='feature2-img' />
                    </div>
                    <div className="feature-content">
                        <h1 className="feature-text text-5xl font-extrabold text-blue-100">Interactive and Engaging Content</h1>
                        <p className="feature-sub-text text-xl mb-6">Features like animations, games, and interactive exercises and more.</p>
                        <img src={feature3} alt="" className='feature1-img' />
                    </div>


                </div>
            </section>
            {/* Statistics Banner */}
            <div className="stats-banner">
                <div className="stat-item">
                    <h3 className="stat-number">{animated ? "50,000+" : "0"}</h3>
                    <p className="stat-label">Happy Students</p>
                </div>
                <div className="stat-item">
                    <h3 className="stat-number">{animated ? "500+" : "0"}</h3>
                    <p className="stat-label">Expert Instructors</p>
                </div>
                <div className="stat-item">
                    <h3 className="stat-number">{animated ? "95%" : "0%"}</h3>
                    <p className="stat-label">Satisfaction Rate</p>
                </div>
                <div className="stat-item">
                    <h3 className="stat-number">{animated ? "24/7" : "0"}</h3>
                    <p className="stat-label">Support Available</p>
                </div>
            </div>
            {/* Testimonials Section */}
            <div className="testimonials-section">
                <h3 className="testimonials-title">What Our Students Say</h3>
                <div className="testimonials-container">
                    <div className="testimonial-card">
                        <div className="testimonial-text">
                            "Learn-Z transformed my career! The instructors are amazing."
                        </div>
                        <div className="testimonial-author">
                            <div className="author-avatar"></div>
                            <div className="author-details">
                                <h4>Alex Johnson</h4>
                                <p>Software Developer</p>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <div className="testimonial-text">
                            "The interactive content made learning complex topics easy and fun."
                        </div>
                        <div className="testimonial-author">
                            <div className="author-avatar"></div>
                            <div className="author-details">
                                <h4>Maria Garcia</h4>
                                <p>Data Scientist</p>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <div className="testimonial-text">
                            "Being able to learn at my own pace was a game-changer for me."
                        </div>
                        <div className="testimonial-author">
                            <div className="author-avatar"></div>
                            <div className="author-details">
                                <h4>James Wilson</h4>
                                <p>UX Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="cta-section">
                <h2 className="cta-title">Ready to Start Your Learning Journey?</h2>
                <p className="cta-subtitle">Join thousands of students achieving their goals with Learn-Z</p>
                <div className="cta-buttons">
                    <button className="cta-button primary">Get Started Now</button>
                    <button
                        className="cta-button secondary no-underline"
                        onClick={onViewCourses}
                    >
                        View Courses
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Features
