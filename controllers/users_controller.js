require('dotenv').config();
const jwt = require('jsonwebtoken');
const {users} = require('../models/users_model');

const JWT_SECRET = process.env.JWT_SECRET;


//GET users
const get_users = async(req, res)=> {
    try {
        const all_users = await users.find({});
        return res.status(200).json({all_users})
    }
    catch(err){
        console.log("Error: ", err)
    }
};

//SignUp a user
const signUp_user = async(req, res)=> {
    try {
        const {first_name, last_name, email } = req.body;
        const userExist = users.findOne({email});

        if(userExist !=={}){
            throw {"message": `A user with email '${email}' already exist. please use another email address.`}

        }
        const api_key = jwt.sign({first_name, last_name, email}, JWT_SECRET)
        
            const user = await users.create({
                first_name,
                last_name,
                email,
                api_key
            });
        return res.status(200).json({
            "first_name":user.first_name, 
            "last_name":user.last_name,
            "email": user.email,
            "api_key": user.api_key
        })
    }
    catch(err){
        console.log("Error: ", err)
        res.status(400).send( err)

    }
};



module.exports = {
    get_users,
    signUp_user,
}