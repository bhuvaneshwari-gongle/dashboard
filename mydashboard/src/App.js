// src/App.js
import React, { useState } from 'react';
//import Header from './header';
//import Projects from './projects';
import About from './about';
import './App.css';
import Contact from './contact';
import DashboardButtons from './dashboardbuttons';


const App = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/background.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    };


    return (
        <div className='app' style={backgroundImageStyle}>
            {/*<Header /> */}

            <About />

            {/* <Projects /> */}
            {/*<Contact />
            <DashboardButtons/> */}
        </div>
    );
};

export default App;
