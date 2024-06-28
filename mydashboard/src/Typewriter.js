import React, { useEffect, useState } from 'react';
import './Typewriter.css';

const Typewriter = ({ text, onComplete }) => {
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(displayText + text[index]);
                setIndex(index + 1);
            }, 170);
            return () => clearTimeout(timeout);
        } else if (onComplete) {
            onComplete();
        }
    }, [index, text, displayText, onComplete]);

    return <span>{displayText}</span>;
};

export default Typewriter;
