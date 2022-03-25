const { ValidateName, ValidateEmail, ValidateUsername } = require("./src/validation/validation");
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');// for hashing and also comparing(not used yet).
app.use(express.urlencoded({extended:false}));//used in post method for data of req.
const mongoose = require("mongoose");
app.use(express.static('public'))


//mongo connectivity...
mongoose.connect('mongodb://localhost:27017/variant', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
var db = mongoose.connection;

db.on('error', () => console.log("Error in connecting to database"));
db.once('open', () => console.log("connected to Database"));

// creation of mongoose schema..
const Schema = mongoose.Schema;
const User = mongoose.model('users', Schema({
    name: String,
    gender: String,
    email: String,
    username: String,
    password: String
}));
app.post("/signup", async (req, res) => {
    const { name, gender, email, username, password } = req.body;
    console.log(req.body);

    if (name.length == 0 || email.length == 0 || gender.length == 0 || username.length == 0 || password.length == 0) {
        console.log("error", "Error: Input cannot be empty !");
        res.redirect("signup.html");
    }
    else if (!ValidateName(name)) {
        console.log("error", "Error: Invalid name..It must only contains (a-z, A-Z) !");
        res.redirect("signup.html");
    }
    else if (!ValidateUsername(username)) {
        console.log("error", "Error: Invalid username !");
        res.redirect("signup.html");
    }
    else if (!ValidateEmail(email)) {
        console.log("error", "Error: Invalid email..It must contains('@' and '.') !");
        res.redirect("signup.html");
    }
    else {
        const existingUser = await User.findOne({ username: username });
        if (existingUser) {
            console.log("error", "Error: User already exists !");
            res.redirect("signup.html");
        }
        else {
            let data = {
                "name": name,
                "gender": gender,
                "email": email,
                "username":username,
                "password": password
            }
            db.collection('users').insertOne(data, (err, collection) => {
                if (err) {
                    throw err;
                }
                console.log("inserted");
            });
            return res.redirect('login.html');
        }
    }
});
//_______________________________________________________________________
app.post("/login", async (req, res) => {
    let username = req.body.username;
    let pass = req.body.password;
    const allData = await User.find({});

    for (let i = 0; i < allData.length; i++){
        if (allData[i].username == username && allData[i].password == pass) {
            console.log("User found!!");
            return res.redirect('home.html');
        }
    }
    console.log("User not found");
    return res.redirect('signup.html');
});
//_______________________________________________________________________
const port = process.env.PORT || 8000;
console.log(`Server Started on port: ${port}`);
app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
}).listen(port);