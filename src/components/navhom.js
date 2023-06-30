import './navhom.css'
import image1 from '../asset/mrsm_logo.png'
import { useNavigate } from "react-router-dom";
import React from 'react';
import  { useState } from 'react';
import PopupActivity from '../components/popupActivity'
import PopupContact from './popupContact';

export default function Navhom() {
    const navigate = useNavigate();
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isSecondMenuOpen, setSecondMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMenuOpen(!isMenuOpen);
      };

      const handleLinkClickC = () => {
        setSecondMenuOpen(!isSecondMenuOpen);
      };  
      const handleClose = () => {
        setMenuOpen(false);
      };
      const handleCloseC = () => {
        setSecondMenuOpen(false);
      };
    

    return(
        <div>
        <div className='bck'>
            <nav>
                <a className='a1' href='http://bpulau.mrsm.edu.my/'><img src ={image1} className='qries'/> MRSM Balik Pulau</a>
                <a className='contact a2' onClick={handleLinkClickC}>Contact Us</a>
                <a className ='a2' onClick={()=>navigate("/Register")}>Register</a>  
                <a className ='a2' onClick={handleLinkClick}>Activity</a>
                
            </nav>
            {isMenuOpen && <PopupActivity onClose={handleClose} />}
            {isSecondMenuOpen && <PopupContact onClose={handleCloseC} />}
        </div>
        
        </div>
        
    )
}