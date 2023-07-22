import React, { useState } from 'react';
import './search.css'
import { useNavigate } from 'react-router-dom';
import imgicon from './asset/icons8-home-40.png'

const SearchStudent = () => {
  const [ic, setIC] = useState('');
  const [studentData, setStudentData] = useState(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    // Implement the logic to fetch student data from the backend based on the IC
    // You can use the fetch function to send a GET request to the backend
    fetch(`http://localhost:5000/students/${ic}`)
    .then((response) => {
      if (!response.ok) {
        // If the response status is not in the range 200-299 (OK), handle the error
        if (response.status === 404) {
          // Student not found
          alert('No student data found for the given IC.');
        } else {
          // Other errors
          alert('Error fetching student data. Please try again.');
        }
        throw new Error('Network response was not ok.');
      }
      return response.json();
    })
      .then((data) => {
        if (data !== null && data !== undefined) {
          // If data is found, update the studentData state
          console.log(data);
          setStudentData(data);
        } else {
          // If no data is found, display an alert
          alert('No student data found for the given IC.');
          setStudentData(null);
        }
      })
      .catch((error) => {
        console.error('Error fetching student data:', error);
        setStudentData(null);
      });
  };

  const handleDelete = (name) => {
    fetch(`http://localhost:5000/process/${name}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          // If the delete request was successful, update the frontend state
          setStudentData(null); // Clear the student data after deletion
          navigate('/Home'); // Then navigate to the Home page
        } else {
          console.error('Error deleting data:', response.statusText);
        }
      })
      .catch((error) => {
        console.error('Error deleting data:', error);
      });
  };

  const handleUpdate = () => {
    // When the "Update" button is clicked, navigate to the "update" route
    navigate('/update', { state: { studentData } });
  };

  return (
    <div className='container-search'>
      <h1><button className='button-home' onClick={()=>navigate("/Home")}><img src={imgicon} alt=''/></button>Search Student</h1>
      <div>
        <input
          type="text"
          value={ic}
          onChange={(e) => setIC(e.target.value)}
          placeholder="Enter Student IC"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {studentData && (
        <div >
          {/* Display the student data */}
          <h2 className='infobox'>Student Information:</h2>
          
          <div className='infobox'><label htmlFor='name'>Name</label><p name = 'name' id = 'name'>{studentData.name}</p></div>
          <div className='infobox'><label htmlFor='IC'>IC</label><p name = 'IC' id = 'IC'>{studentData.IC}</p></div>
          <div className='infobox'><label htmlFor='gender'>Gender</label><p name = 'gender' id = 'gender'>{studentData.gender}</p></div>
          <div className='infobox'><label htmlFor='email'>E-mail</label><p name = 'email' id = 'email'>{studentData.email}</p></div>
          <div className='infobox'><label htmlFor='address'>Address</label><p name = 'address' id = 'address'>{studentData.address}</p></div>
          <div className='infobox'><label htmlFor='numphone'>Phone Number</label><p name = 'numphone' id = 'numphone'>{studentData.numphone}</p></div>
          <div className='infobox'><label htmlFor='class'>Class</label><p name = 'class' id = 'class'>{studentData.class}</p></div>
          <div className='infobox'>
            <button className="button1" onClick= {handleUpdate}>Update</button>
            <button className="button1" onClick={() => handleDelete(studentData.name)}>Delete</button>

          </div>

        </div>
      )}
    </div>
  );
};

export default SearchStudent;