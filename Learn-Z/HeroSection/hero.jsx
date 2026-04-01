import React from 'react'

import './hero.css'

const Hero = () => {
    return (
        <div>
            {/* Hero Section */}
            <section id="home" className="hero">
                <div className="hero-bg hero-parallax"></div>
                <div className="hero-content">
                    <h1 className="hero-text text-5xl font-extrabold text-blue-100">Empower Your Future With Technology</h1>
                    {/* <p className="hero-sub-text text-xl mb-6">Discover a universe of knowledge with our expertly crafted online courses, tailored for every learner.</p> */}
                    <a href="#features" className="hero-btn btn-3d inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg">Begin Your Journey</a>
                </div>
            </section>
        </div>
    )
}

export default Hero
