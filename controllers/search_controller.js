const {regions} = require('../models/regions_model');
const {states} = require('../models/states_model');
const {local_gov_areas} = require('../models/local_gov_areas_model');


// Search for a region function.
const searchRegions = async(req, res, q) => {
    try {
        const region_data = await regions.findOne({ name: { $regex: new RegExp(`^${q}$`, 'i') } }, {"name":1, "states":1, "capital":1, "description":1, "_id":0 });
        return res.status(200).send(region_data)
    }
    catch(err){
        console.log("Error: ", err)
    }

}

// Search for a state function.
const searchStates = async(req, res, q) => {
        try {
        const state_data = await states.findOne({ name: { $regex: new RegExp(`^${q}$`, 'i') } }, {"name":1, "capital":1, "region":1, "population":1, "description":1, "no_of_lgas":1, "local_gov_areas":1,  "_id":0 });
        return res.status(200).send(state_data)
    }
    catch(err){
        console.log("Error: ", err)
    }

}


// Search for a local government area function.
const search_local_gov_areas = async(req, res, q) => {
        try {
        const local_gov_area_data = await local_gov_areas.findOne({ name: { $regex: new RegExp(`^${q}$`, 'i') } }, {"name":1, "state":1, "region":1, "postal_code":1, "population":1, "description":1, "_id":0 });
        return res.status(200).send(local_gov_area_data)
    }
    catch(err){
        console.log("Error: ", err)
    }

}



// Search 
const search = (req, res)=> {
    const {category, q} = req.query;

    if(category === "regions"){
        return searchRegions(req, res, q);
    }else if(category === "states"){
        return searchStates(req, res, q);
    }else if(category === "local_gov_areas"){
        return search_local_gov_areas(req, res, q);
    }
};



module.exports = {
    search
}