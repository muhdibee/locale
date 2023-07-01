const express = require('express');
const users_route = express.Router();
const users_controller = require('../controllers/users_controller')

users_route.route('/')
.get(users_controller)

module.exports = {
    users_route
}