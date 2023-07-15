require('dotenv').config();
const jwt = require('jsonwebtoken');
const {users} = require('../models/users_model');


const auth = async(req, res, next) => {
    const {api_key} = req.query;

    try{
        if(!api_key){
            throw "api key is required.";
        }
        const user = await users.findOne({api_key});

        if(user === {}){
            throw "Invalid api key.";
        }
        
        req.user = user;
        next()
    }catch(err){
        console.log(err)
        res.status(400).json({"error": "Authentication error", "message": err})
    }
}

module.exports = auth