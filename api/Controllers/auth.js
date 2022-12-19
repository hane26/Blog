import {db}  from  '../db.js'
import bcrypt from 'bcryptjs'
export const addAuth = (req, res) => {
    res.json("this is the add Auth route from Controller")
    console.log("assAuth")

}

export const register = (req, res) => {
    console.log("registerr");


    /// CHECK IF USER EXIST IN DB

    const q = "SELECT * FROM users WHERE email = ? OR username = ?"

    db.query(q,[req.body.email, req.body.name], (err, data) => {
        if(err) return res.json(err);
        if(data.length) return res.status(409).json("User already exist"); // 409 means conflict
        // data.lenght means if data is not empty


        // HASH THE PASSWORD AND CREATE USER
        // to encrypt password we need to use a librarty called bcrypt
        //const bcrypt = require('bcryptjs');
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);


        // we are going to insert our user to our db 

        const q = "INSERT INTO users (username, email, password) VALUES (?)"

        const values = [
            req.body.username,
            req.body.email,
           hash
        ];

        db.query(q, [values] , (err, data) => {

            if(err) return res.json(err);
            return res.status(200).json("User created successfully"); // 200 means ok

            

        })


        
    });
}

export const login = (req, res) => {
    console.log("login");

}

export const logout = (req, res) => {
    console.log("logout")
}