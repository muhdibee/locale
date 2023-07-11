const {regions} = require('../models/regions_model');
const {states} = require('../models/states_model');
const {local_gov_areas} = require('../models/local_gov_areas_model');

// Search 
const search = async(req, res)=> {
    const {category, q} = req.query;
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
    search
}