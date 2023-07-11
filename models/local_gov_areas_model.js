require('dotenv').config();
const mongoose =require("mongoose");

const Schema = mongoose.Schema
const local_gov_areasSchema = new Schema({
    name: {
        type: String,
        required:[true, "name is required"],
        trim: true,
    },
    state: {
        type: String,
        required:[true, "state is required"],
        trim: true,
    },
    region: {
        type: String,
        required:[true, "region is required"],
        trim: true,
    },
    postal_code: {
        type: Number,
        required:[true, "postal_code is required"],
        default: 0,
        trim: true,
    },
    population: {
        type: Number,
        required:[true, "population is required"],
        default: 0,
        trim: true,
    },
    description: {
        type: String,
        required:[true, "description is required"],
        default: "State description is placed here.",
        trim: true,
    }
});

// create users model
const   local_gov_areas = mongoose.model("local_gov_areas", local_gov_areasSchema);

module.exports = {local_gov_areas}