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

const search_states = async(req, res)=> {
    const {state} = req.params;
    try {
        const state_data = await states.findOne({ name: { $regex: new RegExp(`^${state}$`, 'i') } }, {"name":1, "capital":1, "region":1, "population":1, "description":1, "no_of_lgas":1, "local_gov_areas":1,  "_id":0 });
        return res.status(200).send({state_data})
    }
    catch(err){
        console.log("Error: ", err)
    }
};



module.exports = {
    get_states,
    search_states,
}