import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = () => {
  const [loadingText, setLoadingText] = useState('');

  useEffect(() => {
    const text = 'HirEx';
    let index = 0;

    const intervalId = setInterval(() => {
      setLoadingText((prevText) => prevText + text[index]);
      index++;

      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, 200); // Delay between each character appearance

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p className="loader-text">
        <strong>{loadingText}</strong>
      </p>
    </div>
  );
};

export default Loader;
