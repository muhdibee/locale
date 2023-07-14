const express = require('express');
const states_router = express.Router();
const states_controller = require('../controllers/states_controller');
const auth = require("../middlewares/auth")

states_router.route("/")
.get(auth, states_controller.get_states);


module.exports = states_router