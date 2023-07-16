const express = require('express');
const regions_router = express.Router();
const regions_controller = require('../controllers/regions_controller');
const auth = require("../middlewares/auth")


regions_router.route("/")
.get(auth, regions_controller.get_regions);


module.exports = regions_router