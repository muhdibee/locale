const {local_gov_areas} = require('../models/local_gov_areas_model');

//GET local_gov_areas
const get_local_gov_areas = async(req, res)=> {
    try {
        const all_local_gov_areas = await local_gov_areas.find({}, {"no_of_lgas":0, "capital":0, "region":0, "population":0, "description":0, "__v":0, "_id":0}).sort("name");
        return res.status(200).send(all_local_gov_areas)
    }
    catch(err){
        console.log("Error: ", err)
    }
};

const search_local_gov_areas = async(req, res)=> {
    const {local_gov_area_data} = req.params;
    try {
        const all_local_gov_areas = await local_gov_areas.findOne({ name: { $regex: new RegExp(`^${state}$`, 'i') } }, {"name":1, "capital":1, "region":1, "population":1, "description":1, "no_of_lgas":1, "local_gov_areas":1,  "_id":0 });
        return res.status(200).send({all_local_gov_areas})
    }
    catch(err){
        console.log("Error: ", err)
    }
};



module.exports = {
    get_local_gov_areas,
    search_local_gov_areas,
}