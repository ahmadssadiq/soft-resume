import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Ahmad Sadiq. All rights reserved.</p>
            <div className="social-links">
                <a href="https://github.com/ahmadssadiq" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com/in/ahmadssadiq" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin />
                </a>
                <a href="mailto:asadiq@bu.edu" aria-label="Email">
                    <FaEnvelope />
                </a>
            </div>
        </footer>
    );
}

export default Footer;