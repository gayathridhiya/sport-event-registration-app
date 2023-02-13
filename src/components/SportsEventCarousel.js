import React, { useState } from 'react';
import '../styleSheets/EventCardStyle.css';

const SportsEventCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="banner wow zoomIn mt-2 mb-3 h-75" data-wow-delay="0.1s" id="resume">
      <div className="container">
        
        
          <p className="resumePara">
          "Unleash the Athlete in You! Book your Sports Day Event now and experience the thrill of competition, camaraderie, and triumph!"
          </p>
          <a className="btn" href="img/GM_Resume.pdf">Unleash Now</a>
       
      </div>
    </div>
  );
};

export default SportsEventCarousel;
