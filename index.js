// Import dependencies
const express = require("express");
const logger = require("morgan");
const cors = require('cors');

// MongoDB connections
const connect_to_database = require("./db_connection");

// Routers
const regions_router = require('./routes/regions_route');
// const states_router = require('./routes/states_route');
const local_gov_areas_router = require('./routes/local_gov_areas_route');
const users_router = require('./routes/users_route');

// Models
const {regions} = require('./models/regions_model');
// const {states} = require('./models/states_model');
const {local_gov_areas} = require('./models/local_gov_areas_model');

// Data
const {regions_data} = require("./data");
// const {states_data} = require("./data");
const {local_gov_areas_data} = require("./data");


const app = express();
const PORT = 5000;

// DB connection
connect_to_database();

// App level Middleware.
app.use(express.json())
app.use(logger('dev'));
app.use(cors());

// Route Middleware
app.use("/api/nigeria/regions", regions_router);
// app.use("/api/nigeria/states", states_router);
app.use("/api/nigeria/local_government_areas", local_gov_areas_router);
app.use("/api/users", users_router);



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


regions.deleteMany({})
  .then(()=>{
    return regions.create(regions_data )
  })
  .then((result) => {
    console.log(`Inserted count: ${result.length}`);
    // Close the MongoDB connection
    // mongoose.connection.close();
  })
  .catch((err) => {
    console.error('Error inserting documents:', err);
    // Close the MongoDB connection
    // mongoose.connection.close();
  });



app.listen(PORT, ()=>{
    console.log("Listening on port: ", PORT);
})