import React, { useEffect, useState } from 'react';
import './confirmation.css';

const RegisterConfirmation = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/process');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='box1'>
      <h1>Registration Successful!</h1>
      <p>Thank you for registering.</p>
      {data && (
        <div>
          <h2>Received Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default RegisterConfirmation;