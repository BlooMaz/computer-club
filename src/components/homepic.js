import React from 'react';
import image2 from '../asset/Logo_MRSM.png'
import imageSrc from  '../asset/home.png'
import './homepic.css';



export default function homepic(){
    return (
        <div className="container">
          <img src={image2} alt="Centered Image" className="centered-image" />
          <img src={imageSrc} alt="Centered Image" className="centered-image" />
        </div>
      );
}