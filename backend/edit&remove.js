const express = require('express');
const router = express.Router();
const getConnection = require('../utils/database');


router.get('/', (req, res) => {
    
    const data = req.body;

    // Insert the message into the database
    const insertQuery = 'SELECT * FROM users WHERE id = $1';
    let values = [
        req.cookies.id
    ];
    

    getConnection.query(insertQuery, values)
        .then(result => {
            if(result.rowCount>0) {
                res.status(200).send(result.rows[0]);
            }
            else {
                res.status(200).send({"login_check": "false"});
            }
        })
        .catch(error => {
            res.status(500).send({"massage": "Internal Server Error"});
        });
});

module.exports = router;