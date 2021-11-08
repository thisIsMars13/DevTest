const express = require('express');
const { getUserByEmail } = require('../controllers/user.controllers');

const router = express.Router();

// DOCU: Post
// Route to fetch user data
// @author: Jomar
router.route('/').post(getUserByEmail);

module.exports = router;