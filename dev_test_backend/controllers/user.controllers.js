const User = require('../models/users.model');
const bcrypt = require('bcryptjs')

// DOCU: POST
// Fetch user by email
// Return: {email, password, _id}
// @author: Jomar
const getUserByEmail = (req, res) => {
    let { email, password } = req.body;

    // Fetch user data by email
    User.findOne({email})
        .then(user => {

            // if user dont exist return error
            if(!user) {
                res.status(400).json({message: "Invalid Email/Password"})
            }
            
            // compare the input password to db password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch){
                        res.json(user)
                    }
                    else{
                        res.status(400).json({message: "Invalid Email/Password"})
                    }
                })
        })
}


module.exports = {
    getUserByEmail
}