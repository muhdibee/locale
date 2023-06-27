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
    res.status(200).send("Welcome to Locale API \n if you have an account go to '/login' to login \n or go to '/sign_up' to create an account if you don't have one.")
});

app.get("/api", (req, res)=> {
    res.status(200).send("Welcome to Locale API \n if you have an account go to '/login' to login \n or go to '/sign_up' to create an account if you don't have one.")
});
app.get("*", (req, res)=> {
    res.status(200).send("Route not supported.")
});

app.listen(PORT, ()=>{
    console.log("Listening on port: ", PORT);
})