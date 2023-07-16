const express = require('express');
const search_router = express.Router();
const search_controller = require('../controllers/search_controller');
const auth = require("../middlewares/auth")


search_router.route("/")
.get(auth, search_controller.search);


module.exports = search_router