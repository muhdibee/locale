const {states} = require('../models/states_model');

//GET states
const get_states = async(req, res)=> {
    try {
        const all_states = await states.find({}, {"name": 1, "_id":0}).sort("name");
        const statesArray = [];
        all_states.map((state)=>{
            statesArray.push(state.name);
        })
        return res.status(200).send(statesArray)
    }
    catch(err){
        console.log("Error: ", err)
    }
};



module.exports = {
    get_states,
}