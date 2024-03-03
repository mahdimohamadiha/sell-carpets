const express = require('express');
const router = express.Router();
const getConnection = require('../utils/database');

router.post('/', (req, res) => {
    
    const data = req.body;

    // Insert the message into the database
    const insertQuery = 'SELECT id FROM users WHERE username = $1 and "password" = $2';
    let values = [
        data.username,
        data.password
    ];
    

    getConnection.query(insertQuery, values)
        .then(result => {
            if(result.rowCount>0) {
                res.cookie('id', result.rows[0]["id"]);
                res.status(200).send({"login_check": "true"});
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