require('dotenv').config();
const jwt = require('jsonwebtoken');
const {users} = require('../models/users_model');


const auth = async(req, res, next) => {
    const {api_key} = req.query;

    try{
        // Check if api_key is provided.
        if(!api_key){
            throw "api key is required.";
        }
        const user = await users.findOne({api_key});
        // Check if there is no api key match.
        if(user === null){
            throw "Invalid api key.";
        }
        
        req.user = user;
        next()
    }catch(err){
        res.status(400).json({"error": "Authentication error", "message": err})
    }
}

module.exports = auth