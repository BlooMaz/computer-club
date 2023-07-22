const express = require('express');
const app = express();
const port = 5000; // Choose a port number for your server
const path = require('path');
const mysql = require('mysql2');
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'computer club',
});


const cors = require('cors');
const multer = require('multer');
var name1;
var IC1;
var username1;
var password1;
var address1;
var gender1;
var email1;
var class1;
var age1;
var num1;
var interest1=[];

// Create an instance of the multer middleware
const upload = multer();
// Use the multer middleware to parse the form data
// Enable CORS
app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

  app.get('/process', (req, res) => {
    // Fetch all data from the MySQL database
    connection.query('SELECT * FROM student', (error, results) => {
      if (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data from database');
      } else {
        
        // Send the data as a JSON response
        res.json({ datas: results });
        console.log('Data received:', results);
      }
    });
  });
 

  
app.post('/process',upload.none(),(req, res) => {
    const formData = req.body;
    const name = formData['name'];
    const IC = formData['IC'];
    const username = formData['username'];
    const password = formData['password'];
    const address = formData['address'];
    const gender = formData['gender'];
    const email = formData['email'];
    const classValue = formData['class'];
    const age = formData['age'];
    const numphone = formData['numphone'];
    const interests = formData['interests'];
    console.log(formData);
    console.log('Name:', name);
    console.log('IC Number:', IC);
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Address:', address);
    console.log('Gender:', gender);
    console.log('Email:', email);
    console.log('Class:', classValue);
    console.log('Age:', age);
    console.log('Telephone:', numphone);
    console.log('Interests:', interests);

    name1 = name;
    IC1 = IC;
    username1 = username;
    password1 = password;
    address1 = address;
    gender1 = gender;
    email1 = email;
    class1 = classValue;
    age1 = age;
    num1 = numphone;
    interest1 = interests;

    connection.query(
      'INSERT INTO student (name, IC, username, password, address, gender, email, class, age, numphone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [name, IC, username, password, address, gender, email, classValue, age, numphone],
      (error, results) => {
        if (error) {
          console.error('Error inserting data:', error);
          res.status(500).send('Error inserting data to database');
        } else {
          console.log('Data inserted successfully!');
          res.status(200).end();
        }
      }
    )

  res.status(200).end();
});

// DELETE endpoint to delete data based on the name
app.delete('/process/:name', (req, res) => {
  const nameToDelete = req.params.name;

  // Implement the delete operation in your database
  connection.query(
    'DELETE FROM student WHERE name = ?',
    [nameToDelete],
    (error, results) => {
      if (error) {
        console.error('Error deleting data:', error);
        res.status(500).json({ message: 'Error deleting data' });
      } else {
        console.log('Data deleted successfully!');
        res.status(200).json({ message: 'Data deleted successfully' });
      }
    }
  );
});

app.get('/students/:ic', (req, res) => {
  const studentIC = req.params.ic;

  // Implement the logic to fetch student data from the database based on the IC
  // You can use a MySQL query with a WHERE clause to find the student by IC
  connection.query(
    'SELECT * FROM student WHERE IC = ?',
    [studentIC],
    (error, results) => {
      if (error) {
        console.error('Error fetching student data:', error);
        res.status(500).json({ message: 'Error fetching student data' });
      } else {
        if (results.length === 0) {
          // No student found with the provided IC
          alert('No student data found for the given IC.');
          res.status(404).json({ message: 'Student not found' });
        } else {
          // Student found, send the data as the response
          res.status(200).json(results[0]);
        }
      }
    }
  );
});

app.put('/students/:ic', upload.none(), (req, res) => {
  console.log('Request Body:', req.body); 
  const studentIC = req.params.ic;
  const updatedData = req.body;
  
    


      
  // Extract the properties from updatedData object
  const { name, IC,address, email, classValue, age, numphone } = updatedData;
  console.log(studentIC);
  console.log(updatedData);
  console.log(updatedData.class)
  // Implement the logic to update the student data in the database
  // Use the SET clause to specify the columns to update
  connection.query(
    'UPDATE student SET name=?, IC=?,  address=?, email=?, class=?, age=?, numphone=? WHERE IC = ?',
    [name, IC,address, email, updatedData.class, age, numphone , IC],
    (error, results) => {
      if (error) {
        console.error('Error updating student data:', error);
        res.status(500).json({ message: 'Error updating student data' });
      } else {
        // If the update is successful, send a response to indicate success
        res.status(200).json({ message: 'Student data updated successfully' });
      }
    }
  );
});
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});