import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Hero.css';
import profilePic from '../images/profile.jpg';
import resume from '../images/Ahmad_Sadiq_Resume_jan29.pdf';

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

                {/* Loader Effect (Replacing <p>Software Engineer</p>) */}
                <div className="loader">
                    <div className="words">
                        <span className="word">Software Engineer</span>
                        <span className="word">CS @ Boston University</span>
                        <span className="word">Football Lover</span>
                        <span className="word">Tennis Enthusiast</span>
                    </div>
                </div>

                <div className="btns">
                    <Link smooth to="/#projects" className="btn">
                        View My Work
                    </Link>
                    <a
                        href={resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        style={{ marginLeft: '1rem' }}
                    >
                        View my Resume
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;