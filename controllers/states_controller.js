const {states} = require('../models/states_model');

//GET states
const get_states = async(req, res)=> {
    try {
        const all_states = await states.find({}, {"no_of_lgas":0, "capital":0, "region":0, "population":0, "description":0, "__v":0, "_id":0}).sort("name");
        return res.status(200).send(all_states)
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