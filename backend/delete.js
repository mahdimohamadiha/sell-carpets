const express = require('express');
const router = express.Router();
const getConnection = require('../utils/database');


router.delete('/', (req, res) => {
    
    const data = req.body;

    // Insert the message into the database
    const insertQuery = 'DELETE FROM users WHERE id = $1;';
    let values = [
        req.cookies.id
    ];
    res.clearCookie('id');

    getConnection.query(insertQuery, values)
        .then(result => {
            res.status(201).send({"massage": "Message received and delete user"});
        })
        .catch(error => {
            res.status(500).send({"massage": "Internal Server Error"});
        });
});

module.exports = router;