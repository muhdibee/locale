require('dotenv').config();
const jwt = require('jsonwebtoken');
const {users} = require('../models/users_model');


const auth = async(req, res, next) => {
    const {api_key} = req.query;

    try{
        // Check if api_key is provided.
        if(!api_key){
            throw {status: 401, message: "api key is required."};
        }
        const user = await users.findOne({api_key});
        // Check if there is no api key match.
        if(user === null){
            throw {status: 401, message: "Invalid api key."};
        }
        
        req.user = user;
        next()
    }catch(err){
        res.status(err.status).json({"error": "Authentication error", "message": err.message})
    }
}

// My-local-apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdF9uYW1lIjoiTXVoYW1tYWQiLCJsYXN0X25hbWUiOiJJYnJhaGltIiwiZW1haWwiOiJtdWhkaWJlZUBnbWFpbC5jb20iLCJpYXQiOjE3MTY5MDI2MDh9.S0McMDD_2IUcSazLvVb_t_HE3HkkrvHDJQGVooOq40A

module.exports = auth