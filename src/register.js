import React, { useRef } from 'react';
import './register.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import imgicon from './asset/icons8-home-40.png'

const Register = () => {
  const navigate = useNavigate();
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const numphoneInput = useRef(null);

  
    
  

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateAge = (age) => {
    const ageRegex = /^\d+$/;
    return ageRegex.test(age);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const passwordInput = document.getElementById('password');
    const addressInput = document.getElementById('address');
    const genderInput = document.querySelector('input[name="gender"]:checked');
    const emailInput = document.getElementById('email');
    const ageInput = document.getElementById('age');
    const errorElement = document.getElementById('error');
    const numphoneInputValue = numphoneInput.current.value;

    if (
      nameInput.value.trim() === '' ||
      passwordInput.value.trim() === '' ||
      addressInput.value.trim() === '' ||
      emailInput.value.trim() === '' ||
      !validateEmail(emailInput.value.trim()) ||
      ageInput.value.trim() === '' ||
      !validateAge(ageInput.value.trim()) ||
      !genderInput ||
      numphoneInputValue.trim() === ''
    ) {
      errorElement.style.display = 'block';
    } else {
      errorElement.style.display = 'none';
      
    }

    const checkboxes = document.getElementsByName('interests');
    let checked = false;

    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        checked = true;
        setRegistrationSuccess(true); // Set registration success status
        break;
      }
    }

    if (!checked) {
      alert('Please select at least one interest.');
      return false;
    }
    
    return true;
  };

  return (
    <div>
      <button className='button-home-form' onClick={()=>navigate("/Home")}><img src={imgicon}/></button>
      <div className='container1'>
        <h1>Register</h1>
        <form onSubmit={handleSubmit} action=''>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' maxLength='50' required /><br/><br/>

          <label htmlFor='IC'>IC Number</label>
          <input type='text' id='IC' name='IC' minLength={12} maxLength={12} required /><br/><br/>

          <label htmlFor='username'>Username</label>
          <input type='text' id='username' name='username' minLength={5} maxLength={12} required /><br/><br/>

          <label htmlFor='password'>Password</label>
          <input type='password' id='password' name='password' maxLength='12' required /><br/><br/>

          <label htmlFor='address'>Home address</label>
          <textarea id='address' name='address' rows={4} required /><br/><br/>

          <label>Gender</label>
          <input type='radio' id='male' name='gender' required />
          <label htmlFor='male' className='labelradio'>Male</label>

          <input type='radio' id='female' name='gender' required />
          <label htmlFor='female' className='labelradio'>Female</label>

          <br/><br/>

          <label htmlFor='email'>E-mail</label>
          <input type='text' id='email' name='email' required /><br/><br/>

          <label htmlFor='class'>Class</label>
          <select name='class' id='class'>
            <option value='5A'>5A</option>
            <option value='5B'>5B</option>
            <option value='5C'>5C</option>
            <option value='5D'>5D</option>
          </select><br/><br/>

          <label htmlFor='age'>Age</label>
          <input type='text' name='age' id='age' required/><br/><br/>

          <label htmlFor='numphone'>Telephone</label>
          <input type='tel' name='numphone' id='numphone' ref={numphoneInput} pattern='(\d{3}-\d{3}-\d{4}|\d{10}|(\d{3}-\d{4}-\d{4})|\d{11})' required /><br/><br/>

          <label>Interest</label><br/>
          <input type='checkbox' id='interest-hacking' name='interests' value='hacking' />
          <label htmlFor='interest-hacking' className='check'>Hacking</label>

          <input type='checkbox' id='interest-software-dev' name='interests' value='software-development' />
          <label htmlFor='interest-software-dev' className='check'>Software Development</label><br/>

          <input type='checkbox' id='interest-hackathon' name='interests' value='hackathon' />
          <label htmlFor='interest-hackathon' className='check'>Hackathon</label><br/>

          <input type='checkbox' id='interest-ml' name='interests' value='machine-learning' />
          <label htmlFor='interest-ml' className='check'>Machine Learning</label><br/>

          <input type='checkbox' id='interest-research' name='interests' value='researching' />
          <label htmlFor='interest-research' className='check'>Researching</label><br/>

          <input type='checkbox' id='interest-optimizing' name='interests' value='optimizing' />
          <label htmlFor='interest-optimizing' className='check'>Optimizing</label><br/>

          <input type='checkbox' id='interest-ai' name='interests' value='ai' />
          <label htmlFor='interest-ai' className='check'>AI</label><br/>

          <input type='reset' value='Reset'  />
          <input type='submit' value='Register' />
          
          
        </form>
        
        <p id='error' style={{ color: 'red', display: 'none' }}>
          Please enter all required fields.
        </p>
        {registrationSuccess && (
      <p style={{ color: 'green' }}>Registration successful!</p>
      )}
      
      </div>
    </div>
  );
};

export default Register;