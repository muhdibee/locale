// Import dependencies
const express = require("express");
const logger = require("cors");

const app = express();
const PORT = 5000;

// Base route
app.get("/", (req, res)=> {
    res.status(200).send("Welcome to Local API \n if you have an account go to '/login' to login \n or go to '/sign_up' to create an account if you don't have one.")
});

app.get("/api", (req, res)=> {
    res.status(200).send("Welcome to Local API \n if you have an account go to '/login' to login \n or go to '/sign_up' to create an account if you don't have one.")
});

app.listen(PORT, ()=>{
    console.log("Listening on port: ", PORT);
})