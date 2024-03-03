const express = require('express');
const router = express.Router();
const getConnection = require('../utils/database');


router.put('/', (req, res) => {
    
    const data = req.body;

    // Insert the message into the database
    const insertQuery = 'UPDATE users SET fullname = $1, email = $2, username = $3, password = $4 WHERE id = $5';
    let values = [
        data.fullname,
        data.email,
        data.username,
        data.password,
        req.cookies.id
    ];
    

    getConnection.query(insertQuery, values)
        .then(result => {
            res.status(201).send({"massage": "Message received and updated into the database"});
        })
        .catch(error => {
            res.status(500).send({"massage": "Internal Server Error"});
        });
});

module.exports = router;