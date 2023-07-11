const {local_gov_areas} = require('../models/local_gov_areas_model');

//GET local_gov_areas
const get_local_gov_areas = async(req, res)=> {
    try {
        const all_local_gov_areas = await local_gov_areas.find({}, {"name": 1, "_id":0}).sort("name");
        const local_gov_areasArray = [];
        all_local_gov_areas.map((state)=>{
            local_gov_areasArray.push(state.name);
        })
        return res.status(200).send(local_gov_areasArray)
    }
    catch(err){
        console.log("Error: ", err)
    }
};



module.exports = {
    get_local_gov_areas,
}