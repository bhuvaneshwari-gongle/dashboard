// src/header.js
import React, { useState } from 'react';
import './header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <h1>Bhuvaneshwari Gongle</h1>
            <nav className={`nav ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <button className="hamburger" onClick={toggleMenu}>
                &#9776; {/* Unicode for hamburger icon */}
            </button>
        </header>
    );
};

export default Header;
