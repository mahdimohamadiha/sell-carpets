const express = require('express');
const router = express.Router();
const getConnection = require('../utils/database');
const { v4: uuidv4 } = require('uuid');

router.post('/', (req, res) => {
    
    const data = req.body;
    const buyId = uuidv4();

    // Insert the message into the database
    const insertQuery = 'select id from baskets where userid = $1';
    let values = [
        req.cookies.id
    ];
    console.log(req.cookies.id)

    
    console.log(req.cookies.id)

    getConnection.query(insertQuery, values)
        .then(result => {
            const insertQuery2 = 'insert into buys (id, carpetid, basketid) values ($1, $2, $3)';
            let values2 = [
                buyId,
                data["id"],
                result.rows[0]["id"]
            ];
            getConnection.query(insertQuery2, values2)
                .then(result => {
                    res.status(201).send({"massage": "insert data"});
                })
                .catch(error => {
                    res.status(500).send({"massage": "Internal Server Error"});
                });
            })
        .catch(error => {
            res.status(500).send({"massage": "Internal Server Error"});
        });
});

module.exports = router;