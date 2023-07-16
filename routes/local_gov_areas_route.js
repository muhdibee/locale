const express = require('express');
const local_gov_areas_router = express.Router();
const local_gov_areas_controller = require('../controllers/local_gov_areas_controller');
const auth = require("../middlewares/auth")


local_gov_areas_router.route("/")
.get(auth, local_gov_areas_controller.get_local_gov_areas);


module.exports = local_gov_areas_router