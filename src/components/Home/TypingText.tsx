import React, { useState, useEffect } from 'react';
import './TypingText.css';

interface TypingTextProps {
  text: string;
}

const TypingText: React.FC<TypingTextProps> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, 100); // typing speed in ms

    return () => clearInterval(interval);
  }, [text]);

  return (
    <p className="typing-text">
      {displayedText}
    </p>
  );
};

export default TypingText;