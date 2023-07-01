const users = require('../models/users_model');

const get_users = async()=> {
    try {
        const all_users = await users.find({});
        return res.status(200).json({all_users})
    }
    catch(err){
        console.log("Error: ", err)
    }
}

module.exports = {
    get_users
}