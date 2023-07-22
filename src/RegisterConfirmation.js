import React, { useEffect, useState } from 'react';
import './confirmation.css';
import { useNavigate } from 'react-router-dom';
import imgicon from './asset/icons8-home-40.png'

const RegisterConfirmation = () => {
  const [backendData, setBackendData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch('http://localhost:5000/process')
      .then((response) => response.json())
      .then((data) => {
        console.log('Data received:', data);
        setBackendData(data.datas); // Assuming the response has the data in the "datas" property
      });
  }, []); // Pass an empty array as the second argument to useEffect to run the effect only once

  


  return (
    <div className='box1'>
      
      <h1 className='student-list'> <button className='button-home' onClick={()=>navigate("/Home")}><img src={imgicon} alt=''/></button>All Students</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>IC Number</th>
            <th>email</th>
            <th>class</th>
            <th>Telephone</th>

          </tr>
        </thead>
        <tbody>
          {backendData.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.IC}</td>
              <td>{student.email}</td>
              <td>{student.class}</td>
              <td>+6{student.numphone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegisterConfirmation;