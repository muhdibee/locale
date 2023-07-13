const {users} = require('../models/users_model');

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
    const {first_name, last_name, email } = req.body;
    
    try {
        const user = await users.create({
            first_name,
            last_name,
            email
        });
        return res.status(200).json({user})
    }
    catch(err){
        console.log("Error: ", err)
    }
};



module.exports = {
    get_users,
    signUp_user,
}