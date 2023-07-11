const {regions} = require('../models/regions_model');

//GET regions
const get_regions = async(req, res)=> {
    try {
        const all_regions = await regions.find({}, {"name": 1, "_id":0}).sort("name");
        const regionsArray = [];
        all_regions.map((state)=>{
            regionsArray.push(state.name);
        })
        return res.status(200).send(regionsArray)
    }
    catch(err){
        console.log("Error: ", err)
    }
};


module.exports = {
    get_regions,
}