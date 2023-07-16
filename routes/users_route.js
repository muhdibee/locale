const express = require('express');
const users_router = express.Router();
const users_controller = require('../controllers/users_controller');
const auth = require("../middlewares/auth")


users_router.route("/")
.get(auth, users_controller.get_users)

users_router.route("/signup")
.post(users_controller.signUp_user)


module.exports = users_router;