import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Hero.css';
import profilePic from '../images/profile.jpg';
import resume from '../images/Ahmad_Sadiq_Resume_jan29.pdf';
import LiquidChrome from '../LiquidChrome/LiquidChrome';

function Hero() {
    useEffect(() => {
        const heroImage = document.querySelector('.hero-card img');

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
            <div className="hero-row">
                <div className="hero-card">
                    <div className="profile-section">
                        <img src={profilePic} alt="Ahmad Sadiq" />
                    </div>
                    <div className="main-content">
                        <h1>Hi, I'm Ahmad Sadiq</h1>
                        <div className="btns">
                            <Link smooth to="/#projects" className="btn">
                                View My Work
                            </Link>
                            <a
                                href={resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                            >
                                View my Resume
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hero-animation">
                    <LiquidChrome />
                </div>
            </div>
        </section>
    );
}

export default Hero;