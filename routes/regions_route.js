const express = require('express');
const regions_router = express.Router();
const regions_controller = require('../controllers/regions_controller')

regions_router.route("/")
.get(regions_controller.get_regions);

regions_router.route("/:region")
.get(regions_controller.search_regions);



module.exports = regions_router