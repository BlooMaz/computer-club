import React from 'react';
import Slideshow from './Slideshow';
import './popup.css'

const PopupActivity = ({ onClose }) => {
  return (
    <div className="popup-menu">
        <button className="close-button" onClick={onClose}>
      </button>
      <Slideshow/>
    </div>
  );
};

export default PopupActivity;