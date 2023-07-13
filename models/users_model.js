const mongoose =require("mongoose");

const Schema = mongoose.Schema;


// Create user schema
const UserSchema = new Schema({
    first_name: {
        type: String,
        required:[true, "FirstName is required"],
        trim: true,
    },
    last_name: {
        type: String,
        required:[true, "FirstName is required"],
        trim: true,
    },
    email: {
        type: String,
        required:[true, "Email is required"],
        trim: true,
    },
    api_key: {
        type: String,
        required:[true, "api_key is required"],
        default: "place holder api_key",
    },
    created_at: {
        type: Date,
        required:[true, "created_at is required"],
        default: new Date().toISOString(),

    }
});



// create users model
const   users = mongoose.model("users", UserSchema);


module.exports = {users}