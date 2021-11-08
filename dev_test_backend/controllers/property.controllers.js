const Properties = require('../models/properties.model');

// DOCU: GET
// Fetch all properties
// Return: [{_id, propertyName}...]
// @author: Jomar
const getAllProperties = async(req, res) => {
    try {
        // Fetch all property
        const products = await Properties.find({}, {propertyName: 1});

        res.json(products);
    } catch (error) {
        res.status(404).json({status:false, message: "Properties not found"});
    }
}

// DOCU: GET
// Fetch porperty by id
// Return: {_id, propertyName}
// @author: Jomar
const getPropertyById = async(req, res) => {
    try {
        // Fetch property by id
        const products = await Properties.findById(req.params.id);

        res.json(products);
    } catch (error) {
        res.status(404).json({status:false, message: "Property not found"});
    }
}

module.exports = {
    getAllProperties,
    getPropertyById
}