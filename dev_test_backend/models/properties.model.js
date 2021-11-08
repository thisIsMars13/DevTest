const mongoose = require('mongoose');

const propertySchema = mongoose.Schema({
    propertyName: {
        type : String,
        required: true
    },
    income: {
        January: { type: Number, required: true },
        February: { type: Number, required: true },
        March: { type: Number, required: true },
        April: { type: Number, required: true },
        May: { type: Number, required: true },
        June: { type: Number, required: true },
        July: { type: Number, required: true },
        August: { type: Number, required: true },
        September: { type: Number, required: true },
        October: { type: Number, required: true },
        November: { type: Number, required: true },
        December: { type: Number, required: true }
    },
    expenses: {
        January: { type: Number, required: true },
        February: { type: Number, required: true },
        March: { type: Number, required: true },
        April: { type: Number, required: true },
        May: { type: Number, required: true },
        June: { type: Number, required: true },
        July: { type: Number, required: true },
        August: { type: Number, required: true },
        September: { type: Number, required: true },
        October: { type: Number, required: true },
        November: { type: Number, required: true },
        December: { type: Number, required: true }
    }
}, {
    timestamps: true
})

const Property = mongoose.model('Properties', propertySchema)

module.exports = Property;