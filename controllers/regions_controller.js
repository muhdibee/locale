const {regions} = require('../models/regions_model');

//GET regions
const get_regions = async(req, res)=> {
    try {
        const all_regions = await regions.find({}, {"no_of_lgas":0, "capital":0, "region":0, "population":0, "description":0, "__v":0, "_id":0}).sort("name");
        return res.status(200).send(all_regions)
    }
    catch(err){
        console.log("Error: ", err)
    }
};

const search_regions = async(req, res)=> {
    const {regions} = req.params;
    try {
        const region_data = await regions.findOne({ name: { $regex: new RegExp(`^${state}$`, 'i') } }, {"name":1, "capital":1, "region":1, "population":1, "description":1, "no_of_lgas":1, "local_gov_areas":1,  "_id":0 });
        return res.status(200).send({region_data})
    }
    catch(err){
        console.log("Error: ", err)
    }
};



module.exports = {
    get_regions,
    search_regions,
}