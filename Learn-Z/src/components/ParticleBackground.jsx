import React, { useEffect, useRef } from 'react';
import './ParticleBackground.css'; // Import CSS for styling

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particlesArray = [];
    const numberOfParticles = 50; // Same as previous HTML version

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 2;
        this.speedX = (Math.random() * 1.5 - 0.75) * 0.5; // Slower speed
        this.speedY = (Math.random() * 1.5 - 0.75) * 0.5; // Slower speed
        this.opacity = Math.random() * 0.5 + 0.3;
        this.color = Math.random() > 0.5 ? 'rgba(255, 255, 255,' : 'rgba(59, 130, 246,';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.opacity > 0.1) this.opacity -= 0.005;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = `${this.color}${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.shadowBlur = 5;
        ctx.shadowColor = this.color.includes('255') ? '#fa0000ff' : '#246ce0ff';
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Initialize particles
    function init() {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
        if (particlesArray[i].opacity <= 0.1) {
          particlesArray.splice(i, 1);
          i--;
          particlesArray.push(new Particle());
        }
      }
      requestAnimationFrame(animate);
    }

    init();
    animate();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" />;
};

export default ParticleBackground;