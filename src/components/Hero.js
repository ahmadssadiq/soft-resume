import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link'; // Import HashLink
import './Hero.css';
import profilePic from '../images/profile.jpg';

function Hero() {
    useEffect(() => {
        const heroImage = document.querySelector('.hero-content img');

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const triggerPoint = window.innerHeight / 2;

            if (scrollPosition > triggerPoint) {
                heroImage.classList.add('scrolled');
            } else {
                heroImage.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);

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
                {/* Use HashLink to smoothly scroll to projects */}
                <Link smooth to="/#projects" className="btn">
                    View My Work
                </Link>
            </div>
        </section>
    );
}

export default Hero;