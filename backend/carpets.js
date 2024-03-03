const express = require('express');
const router = express.Router();
const getConnection = require('../utils/database');


router.get('/', (req, res) => {
    
    const data = req.body;

    // Insert the message into the database
    const insertQuery = 'SELECT * FROM carpets';
    let values = [
    ];
    

    getConnection.query(insertQuery, values)
        .then(result => {
            res.status(200).send(result.rows);
        })
        .catch(error => {
            res.status(500).send({"massage": "Internal Server Error"});
        });
});

module.exports = router;