const express = require('express');
const search_router = express.Router();
const search_controller = require('../controllers/search_controller')

search_router.route("/")
.get(search_controller.search);


module.exports = search_router