import React, { useEffect } from 'react';
import './Hero.css';
import profilePic from '../images/profile.jpg';

function Hero() {
    useEffect(() => {
        const heroImage = document.querySelector('.hero-content img');

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const triggerPoint = window.innerHeight / 2; // Adjust this value as needed

            if (scrollPosition > triggerPoint) {
                heroImage.classList.add('scrolled');
            } else {
                heroImage.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id="hero" className="hero">
            <div className="container hero-content">
                <img src={profilePic} alt="Ahmad Sadiq" />
                <h1>Hi, I'm Ahmad Sadiq</h1>
                <p>Software Engineer</p>
                <a href="#projects" className="cta">View My Work</a>
            </div>
        </section>
    );
}

export default Hero;