const express = require('express');
const router = express.Router();
const getConnection = require('../utils/database');


router.get('/', (req, res) => {
    
    const data = req.body;

    // Insert the message into the database
    const insertQuery = 'SELECT fullname FROM users WHERE id = $1';
    let values = [
        req.cookies.id
    ];
    

    getConnection.query(insertQuery, values)
        .then(result => {
            if(result.rowCount>0) {
                res.status(200).send({"isFullname": true , "fullname": result.rows[0]["fullname"]});
            }
            else {
                res.status(200).send({"isFullname": false });
            }
        })
        .catch(error => {
            res.status(500).send({"massage": "Internal Server Error"});
        });
});

module.exports = router;