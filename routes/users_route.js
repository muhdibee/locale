const express = require('express');
const users_router = express.Router();
const users_controller = require('../controllers/users_controller')

users_router.route("/")
.get(users_controller.get_users)
.post(users_controller.post_user)


module.exports = users_router;