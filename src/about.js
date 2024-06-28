
// import React, { useState } from 'react';
// import Profile from './profile';
// import Typewriter from './Typewriter';
// import './about.css';
// import Contact from './contact';
// import DashboardButtons from './dashboardbuttons';


// const About = () => {
//     const [showContent, setShowContent] = useState(false);

//     const handleTypewriterComplete = () => {
//         setShowContent(true);
//     };
//     return (
//         <section id="about" className={`about ${showContent ? 'visible' : ''}`}>
//             <Profile />
//             <h2>
//                 <Typewriter text={"Hi, I'm B!"} onComplete={handleTypewriterComplete} />
//             </h2>
//             <p>
//                 <Typewriter text={"I'm a Software Developer!!"} />
//             </p>
//             {showContent && (
//                 <>
//                 <Contact/>
//                 <DashboardButtons/>
//                 </>
//             )}
//         </section>
//     );
// };

// export default About;

import React, { useState, useEffect } from 'react';
import Profile from './profile';
import Typewriter from './Typewriter';
import Contact from './contact';
import DashboardButtons from './dashboardbuttons';
import './about.css';

const About = () => {
    const [showContent, setShowContent] = useState(false);

    const handleTypewriterComplete = () => {
        setShowContent(true);
    };

    useEffect(() => {
        // Defer non-essential operations
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 1000); // Delay to allow initial rendering

        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="about" className={`about ${showContent ? 'visible' : ''}`}>
            <Profile />
            <h2>
                <Typewriter text="Hi, I'm B!" onComplete={handleTypewriterComplete} />
            </h2>
            <p>
                <Typewriter text="I'm a software developer with a passion for creating web applications." />
            </p>
            {showContent && (
                <>
                    <Contact />
                    <DashboardButtons />
                </>
            )}
        </section>
    );
};

export default About;
