// src/App.js
import React from 'react';
import Header from './header';
import About from './about';
//import Projects from './projects';
import Contact from './contact';

const App = () => {
    return (
        <div>
            <Header />
            <About />
            {/* <Projects /> */}
            <Contact />
        </div>
    );
};

export default App;
