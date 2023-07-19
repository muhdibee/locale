// Import dependencies
require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const cors = require('cors');

// MongoDB connections
const connect_to_database = require("./db_connection");

// Routers
const regions_router = require('./routes/regions_route');
const states_router = require('./routes/states_route');
const local_gov_areas_router = require('./routes/local_gov_areas_route');
const search_router = require('./routes/search_route');
const users_router = require('./routes/users_route');


const app = express();
const PORT = process.env.PORT || 5000;

// DB connection
connect_to_database();

// App level Middleware.
app.use(express.json())
app.use(logger('dev'));
app.use(cors());

// Route Middleware
app.use("/api/nigeria/regions", regions_router);
app.use("/api/nigeria/states", states_router);
app.use("/api/nigeria/local_government_areas", local_gov_areas_router);
app.use("/api/nigeria/search", search_router);
app.use("/api/users", users_router);



// Base route
app.get("/", (req, res)=> {
    res.status(200).send("Locale is a developer tool for anyone who needs to know Nigeria, geographically at least. Locale’s API shows you all of Nigeria’s regions, states, and local government areas(LGAs). Locale is looking to be a very useful tool for the thousands of businesses building for Nigeria’s 200M+ population size.")
});

app.get("/api", (req, res)=> {
    res.status(200).send("Welcome to Locale API \n or go to 'api/users/signup' to create an account if you don't have one.")
});
app.get("*", (req, res)=> {
    res.status(404).send("Route not supported.")
});

app.listen(PORT, ()=>{
    console.log("Listening on port: ", PORT);
})