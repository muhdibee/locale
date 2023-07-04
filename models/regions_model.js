const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const regionsSchema = new Schema({
    name:{
        type: String,
        required: [true, "Name is required."]
    },
    states: [
        {
            name:{
                type: String, 
                required: [true, "Name is required."]
            },
            local_gov_areas: {
                type:[String],
                required: [true, "LGA is required."]
            }
        }
    ],
    capital:{
        type: String,
        required: [true, "capital is required."]
    },
    description:{
        type: String,
        required: [true, "description is required."]
    },

})

const regions = mongoose.model("regions", regionsSchema);

module.exports = {regions}