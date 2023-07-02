require('dotenv').config();
const mongoose =require("mongoose");

const Schema = mongoose.Schema
const statesSchema = new Schema({
    name: {
        type: String,
        required:[true, "name is required"],
        trim: true,
    },
    capital: {
        type: String,
        required:[true, "capital is required"],
        trim: true,
    },
    region: {
        type: String,
        required:[true, "region is required"],
        trim: true,
    },
    no_of_lgas: {
        type: Number,
        required:[true, "no_of_lgas is required"],
        default: 0,
        trim: true,
    },
    local_gov_areas: {
        type: [String],
        required:[true, "local_gov_areas is required"],
    },
    population: {
        type: Number,
        required:[true, "population is required"],
        trim: true,
    },
    description: {
        type: String,
        required:[true, "description is required"],
        default: "State description.",
        trim: true,
    }
});

// create users model
const   states = mongoose.model("states", statesSchema);

module.exports = {states}