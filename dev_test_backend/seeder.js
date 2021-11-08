const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const Property = require('./models/properties.model')
const User = require('./models/users.model')
const properties = require('./data/properties')

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await Property.deleteMany();
        await User.deleteMany()

        await User.insertMany({email:"jg@g.com", password: "123456789"})
        const createdProp = await Property.insertMany(properties);
        console.log(createdProp)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

if(process.argv[2] === '-i'){
    importData();
}