import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Hero.css';
import profilePic from '../images/profile.jpg';
import resume from '../images/Ahmad_Sadiq_Resume_jan29.pdf';
import Balatro from '../Balatro/Balatro';

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
                    <Balatro
                        spinRotation={-2.0}
                        spinSpeed={7.0}
                        offset={[0.0, 0.0]}
                        color1="#DE443B"
                        color2="#006BB4"
                        color3="#162325"
                        contrast={3.5}
                        lighting={0.4}
                        spinAmount={0.25}
                        pixelFilter={745.0}
                        spinEase={1.0}
                        isRotate={false}
                        mouseInteraction={true}
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;