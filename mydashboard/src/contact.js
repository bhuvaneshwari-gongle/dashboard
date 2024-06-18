import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <section id="contact">
            <h2>Contact</h2>
            <div className="contact-icons">
            <a href="https://www.linkedin.com/in/bgongle/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt="LinkedIn" className="icon linkedin-img"/>
            </a>
            <a href="https://github.com/bhuvaneshwari-gongle" target="_blank" rel="noopener noreferrer">
            <img src="/github.png" alt="GitHub" className="icon github-img"/>
            </a>
            <a href="mailto:bhuvaneshwari.gongle@gmail.com">
            <img src="/gmail.png" alt="Gmail" className="icon gmail-img"/>
            </a>
            </div>
        </section>
    );
};

export default Contact;
