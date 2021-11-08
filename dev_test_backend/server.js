const express = require('express');
const dotenv =require('dotenv');
const connectDB = require('./config/db');
const propertyRoutes = require('./routes/properties.routes');
const userRoutes = require('./routes/user.routes');
const session = require('express-session')
const jwt = require('jsonwebtoken');

dotenv.config();
connectDB();

const App = express();

App.use(express.json());

// Routes Middleware
App.use('/api/property', propertyRoutes)
App.use('/api/login', userRoutes)

const PORT = process.env.PORT || 4000

App.listen(PORT, console.log(`Server running on port ${PORT}`));