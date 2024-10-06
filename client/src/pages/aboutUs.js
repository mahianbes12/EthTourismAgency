import React from 'react';
import '../styles/aboutUs.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about">
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          We specialize in providing unforgettable experiences in Ethiopia, from breathtaking landscapes to rich cultural heritage.
        </p>
        <Link to="/"><button>Back To Home</button></Link> 
      </div>
    </div>
  );
}

export default About;
