const {states} = require('../models/states_model');

//GET users
const get_states = async(req, res)=> {
    try {
        const all_states = await states.find({});
        return res.status(200).json({all_states})
    }
    catch(err){
        console.log("Error: ", err)
    }
};

// const post_states = async(req, res)=> {
//     // const {first_name, last_name, email } = req.body;
//     try {
//         return res.status(200).send("Testing states Post.")
//         const user = await users.create({
//             first_name,
//             last_name,
//             email
//         });
//         return res.status(200).json({user})
//     }
//     catch(err){
//         console.log("Error: ", err)
//     }
// };



module.exports = {
    get_states,
}