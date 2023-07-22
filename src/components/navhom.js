import './navhom.css'
import image1 from '../asset/mrsm_logo.png'
import image2 from '../asset/hacker.png'
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
                <a className='a1' href='http://bpulau.mrsm.edu.my/'><img src ={image1} className='qries'alt=''/> MRSM Balik Pulau</a>
                <button className='contact' onClick={handleLinkClickC}>Contact Us</button>
                <button className ='a2' onClick={()=>navigate("/Register")}>Register</button> 
                <button className ='a2' onClick={()=>navigate("/confirmation")}>Student List</button>   
                <button className ='a2' onClick={()=>navigate("/search")}>Search</button>  
                <button className ='a2' onClick={handleLinkClick}>Activity</button>
                <div className='contaierimg'>
                  <p>Computer Club</p>
                  <div><img src ={image2} className='hackerimg'alt=''/></div>
                  <p>It's not a bug,It's a Feature</p>
                  
                </div>
            </nav>
            {isMenuOpen && <PopupActivity onClose={handleClose} />}
            {isSecondMenuOpen && <PopupContact onClose={handleCloseC} />}
        </div>
        
        </div>
        
    )
}