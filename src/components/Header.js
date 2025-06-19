// Header.js
import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className='header'>
            <nav className="container">
                <div className="logo">AHMAD SADIQ.</div>

                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><Link smooth className="nav-link" to="/#hero" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                    <li><Link smooth className="nav-link" to="/#about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
                    <li><Link smooth className="nav-link" to="/#experience" onClick={() => setIsMenuOpen(false)}>Experience</Link></li>
                    <li><Link smooth className="nav-link" to="/#projects" onClick={() => setIsMenuOpen(false)}>Work</Link></li>
                    <li><Link smooth className="nav-link" to="/#skills" onClick={() => setIsMenuOpen(false)}>Skills</Link></li>
                    <li><Link smooth className="nav-link" to="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                </ul>

                <div className="header-actions">
                    <Link smooth to="/#contact" className="hire-btn">Hire me</Link>
                    <Link smooth to="/#about" className="profile-btn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                    </Link>

                    {/* Mobile hamburger menu */}
                    <div className="hamburger" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;