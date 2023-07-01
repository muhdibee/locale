require('dotenv').config();
const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL;

module.exports = ()=>{
    try{
        mongoose.connect(DB_URL);
        mongoose.connection.on('connected', ()=>{
            console.log("Connected to Database successfully.")
        });
        mongoose.connection.on("error", (err)=>{
            console.log("Connection error: ", err)
        })
    }
    catch(err){
        console.log("Connection error: ", err)
    }
}