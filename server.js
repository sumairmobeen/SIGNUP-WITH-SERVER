let users = [
       {
            name: "mobeen",
            fname: "Ghulam Rasool",
            cnic: "111111111111",
            email: "mobeengrs@gmail.com",
            password: "123"
        }, 

];


var PORT = process.env.PORT || 5000;
var express = require("express");
var cors = require('cors');
var morgan = require('morgan');
var bodyParser = require('body-parser');



var app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json())



app.get("/", (req, res, next) => {
    console.log("Get your Responce");
    res.send("Server is running");
});
app.post('/signup', (req, res, next) => {
    let isFound = false;
    let userEmail = req.body.email1

    for (let i = 0; i < users.length; i++) {
        if (users[i].email1 === userEmail) {
            isFound = true;
            break;
        }
    }

    if (isFound) {
        res.send("user not found")
    }

    // else if (isFound) {
    //     res.send("Already Exsist User");


    else {
        users.push(req.body);
        console.log(req.body);
        res.send("Sign Up Succesfully");
    }


});

app.post('/login', (req, res) => {
    let email1 = req.body.email;
    let password1 = req.body.password;
    let isFound = false;
    for (let i = 0; i < users.length; i++) {
        if (email1 === users[i].email && password1 === users[i].password) {
            isFound = i;
            break;
        }
    }

    if (isFound === false) {
        res.send("Login Succesfuly :" + email1);
        console.log("reply ok")
    }
    else {
        res.send("User Not Found");
       

    }


});


app.listen(PORT, () => {
    console.log("server is running on " + PORT);
});
return false;