
import React from 'react';
import './popup.css'

const PopupContact =({onClose})=>{
    return(
        <div className='popup-menu-contact'>
            <div className='contact-container'>
                <h1 className='headingContact'>Get In Touch With Us!</h1>
                <div>
                    <h2>E-Mail</h2>
                    <p>muhdmuaz121@gmail.com</p>
                </div>
                <div>
                    <h2>Number</h2>
                    <p>+6013-7975044</p>
                </div>
                <div>
                    <h2>Based in</h2>
                    <p>Shah Alam,Selangor</p>
                </div>
                <div>
                    <h2>Linkedin</h2>
                    <a className='linkedin' href='linkedin.com/in/muhammad-muaz-bin-rusman'>linkedin.com/in/muhammad-muaz-bin-rusman</a>
                </div>

            </div>
            <button className='close-button-contact' onClick={onClose}></button>
            
        </div>
    )
}
export default PopupContact;