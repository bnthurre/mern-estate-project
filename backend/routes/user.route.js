const userController = require('../controllers/user.controller.js');
const express = require('express');
const router = express.Router();

router.get('/test', userController.getTest);

module.exports = router; // Corrected export statement
