const express = require('express');
const states_router = express.Router();
const states_controller = require('../controllers/states_controller')

states_router.route("/")
.get(states_controller.get_states);

states_router.route("/:state")
.get(states_controller.search_states)



module.exports = states_router