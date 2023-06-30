require('dotenv').config();
import mongoose from "mongoose";

const schema = mongoose.schema;

const UserSchema = new schema({
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
        trim: true,
    },
    created_at: {
        type: Date,
        required:[true, "api_key is required"],
        default: new Date().toISOString,

    }
});

const   users = mongoose.model("users", UserSchema);


exports = {users}