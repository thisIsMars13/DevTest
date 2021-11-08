const express = require('express');
const { getAllProperties, getPropertyById} = require('../controllers/property.controllers');

const router = express.Router();

// DOCU: Get
// Route to fetch all property data
// @author: Jomar
router.route('/').get(getAllProperties);

// DOCU: Get
// Route to fetch property data
// @author: Jomar
router.route('/:id').get(getPropertyById);

module.exports = router;