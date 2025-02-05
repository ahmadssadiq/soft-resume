// Header.js
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css';

function Header() {
    return (
        <header className='header'>
            <nav className="container">
                <div className="logo">AHMAD SADIQ.</div>
                <ul className="nav-links">
                    <li><Link smooth className="nav-link" to="/#hero">Home</Link></li>
                    <li><Link smooth className="nav-link" to="/#about">About</Link></li>
                    <li><Link smooth className="nav-link" to="/#experience">Experience</Link></li>
                    <li><Link smooth className="nav-link" to="/#projects">Work</Link></li>
                    <li><Link smooth className="nav-link" to="/#skills">Skills</Link></li>
                    <li><Link smooth className="nav-link" to="/#contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;