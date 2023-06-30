const express = require('express');
const app = express();
const port = 5000; // Choose a port number for your server
const path = require('path');

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
    res.json({"datas":[name1,IC1,username1,address1,gender1,email1,class1,age1,num1,interest1]})
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
    

  res.status(200).end();
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});