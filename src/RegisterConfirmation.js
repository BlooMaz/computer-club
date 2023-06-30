import React, { useEffect, useState } from 'react';
import './confirmation.css';

const RegisterConfirmation = () => {
  const[backendData,setBackendData] = useState([{}]);

  useEffect(()=>{
    fetch('http://localhost:5000/process').then(
      response=>response.json()
    ).then(
      data =>{setBackendData(data)}
    )
  })
  return (
    <div className='box1'>
      <h1>Registration Successful!</h1>
      <p>Thank you for registering.</p>

      {(typeof backendData.datas === 'undefined')?(
        <p>loading...</p>
      ):(
        backendData.datas.map((data,i)=>(
          <p>{data}</p>
        ))
      )
    }
      
        
    
    </div>
  );
};

export default RegisterConfirmation;