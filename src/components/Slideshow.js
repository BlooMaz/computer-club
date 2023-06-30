import React, { useState, useEffect } from 'react';
import image1 from  '../asset/6.png'
import image2 from  '../asset/2.png'
import image3 from  '../asset/3.png'
import image4 from  '../asset/4.png'
import image5 from  '../asset/5.png'
import './Slideshow.css'

const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const images = [
      image1,
      image2,
      image3,
      image4,
      image5
    ];
  
    const handleNextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      
    };
    
    const handlePrevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    
    useEffect(() => {
      const interval = setInterval(() => {
        handleNextSlide();
      }, 2000); // Adjust the interval duration (in milliseconds) as needed
      
      return () => clearInterval(interval);
    }, []);
    
    return (
        
      <div className="slideshow">
      
        <div className="slide-container">
          <img src={images[currentIndex]} alt="Slideshow Image" className="slide-image" />
          
          <button className="prev-button" onClick={handlePrevSlide}>Previous</button>
          <button className="next-button" onClick={handleNextSlide}>Next</button>
        </div>
      </div>
      
    );
  };
  
  export default Slideshow;
  
 