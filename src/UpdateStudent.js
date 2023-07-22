import React, { useState, useEffect } from 'react';
import './UpdateStudent.css'; // Import your CSS file
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import imgicon from './asset/icons8-home-40.png'

const UpdateStudent = () => {
  const location = useLocation();
  const studentData = location.state?.studentData || null;
  const navigate = useNavigate();
  const [updatedData, setUpdatedData] = useState({
    name: '',
      IC: '',
      address: '',
      email: '',
      class: '',
      age: '',
      numphone: ''
      
    // Add other fields as needed
  });

  useEffect(() => {
    // Initialize the form fields with the student data received from the previous page
    setUpdatedData(studentData || {
        name: '',
        IC: '',
        address: '',
        email: '',
        class: '',
        age: '',
        numphone: '',
      });
    }, [studentData]);

    const handleUpdate = () => {
        if (!studentData) {
          console.error('No student data available for update.');
          return;
        }
    
        // Create a copy of the updatedData state to avoid modifying the original state
        const updatedDataCopy = { ...updatedData };
    
        // Update the properties in the updatedDataCopy with the latest form values
        updatedDataCopy.name = updatedData.name;
        updatedDataCopy.IC = updatedData.IC;
        updatedDataCopy.address = updatedData.address;
        updatedDataCopy.email = updatedData.email;
        updatedDataCopy.class = updatedData.class;
        updatedDataCopy.age = updatedData.age;
        updatedDataCopy.numphone = updatedData.numphone;
        // Add other fields you want to update
    
        // Send the updated student data to the backend
        fetch(`http://localhost:5000/students/${studentData.IC}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedDataCopy), // Use the updatedDataCopy variable
        })
          .then((response) => {
            if (response.ok) {
              console.log(updatedDataCopy);
              // If the update request was successful, navigate to the search page
              navigate('/search'); // Navigate to the search page or any other page you want
            } else {
              console.error('Error updating data:', response.statusText);
            }
          })
          .catch((error) => {
            console.error('Error updating data:', error);
          });
      };

  return (
    
    <div className="container-update">
      <h1> <button className='button-home' onClick={()=>navigate("/Home")}><img src={imgicon} alt=''/></button> Update Student Data</h1>
      {studentData ? (
        <div>
          <div className="form-group-update">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={updatedData.name}
              onChange={(e) =>
                setUpdatedData({ ...updatedData, name: e.target.value })
              }
            />
          </div>
          <div className="form-group-update">
            <label htmlFor="IC">IC</label>
            <input
              type="text"
              name="IC"
              id="IC"
              value={updatedData.IC}
              onChange={(e) =>
                setUpdatedData({ ...updatedData, IC: e.target.value })
              }
            />
          </div>
          <div className="form-group-update">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              value={updatedData.address}
              onChange={(e) =>
                setUpdatedData({ ...updatedData, address: e.target.value })
              }
            />
          </div>
          <div className="form-group-update">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              name="email"
              id="email"
              value={updatedData.email}
              onChange={(e) =>
                setUpdatedData({ ...updatedData, email: e.target.value })
              }
            />
          </div>
          <div className="form-group-update">
            <label htmlFor="class">Class</label>
            <input
              type="text"
              name="class"
              id="class"
              value={updatedData.class}
              onChange={(e) =>
                setUpdatedData({ ...updatedData, class: e.target.value })
              }
            />
          </div>
          <div className="form-group-update">
            <label htmlFor="age">age</label>
            <input
              type="text"
              name="age"
              id="age"
              value={updatedData.age}
              onChange={(e) =>
                setUpdatedData({ ...updatedData, age: e.target.value })
              }
            />
          </div>
          <div className="form-group-update">
            <label htmlFor="numphone">Phone Number</label>
            <input
              type="text"
              name="numphone"
              id="numphone"
              value={updatedData.numphone}
              onChange={(e) =>
                setUpdatedData({ ...updatedData, numphone: e.target.value })
              }
            />
          </div>
          <div className="form-group-update">
            <button onClick={handleUpdate}>Update</button>
          </div>
        </div>
      ) : (
        <p>No student data found.</p>
      )}
    </div>
  );
};

export default UpdateStudent;