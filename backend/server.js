const express = require('express');
const app = express();
const port = 5000; // Choose a port number for your server
const path = require('path');

const cors = require('cors');
const multer = require('multer');

// Create an instance of the multer middleware
const upload = multer();
// Use the multer middleware to parse the form data
// Enable CORS
app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/process', (req, res) => {
    
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

  res.status(200).end();
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});