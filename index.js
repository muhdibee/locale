// Import dependencies
const express = require("express");
const logger = require("morgan");
const cors = require('cors');

const app = express();
const PORT = 5000;



// App level Middleware.
app.use(logger('dev'));
app.use(cors());

// Base route
app.get("/", (req, res)=> {
    res.status(200).send("Locale is a developer tool for anyone who needs to know Nigeria, geographically at least. Locale’s API shows you all of Nigeria’s regions, states, and local government areas(LGAs). Locale is looking to be a very useful tool for the thousands of businesses building for Nigeria’s 200M+ population size.")
});

app.get("/api", (req, res)=> {
    res.status(200).send("Welcome to Locale API \n if you have an account go to '/login' to login \n or go to '/sign_up' to create an account if you don't have one.")
});
app.get("*", (req, res)=> {
    res.status(404).send("Route not supported.")
});

app.listen(PORT, ()=>{
    console.log("Listening on port: ", PORT);
})