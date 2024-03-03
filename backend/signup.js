const express = require('express');
const router = express.Router();
const getConnection = require('../utils/database');
const { v4: uuidv4 } = require('uuid');

router.post('/', (req, res) => {
    
    const data = req.body;
    const userId = uuidv4();
    const basketId = uuidv4();

    // Insert the message into the database
    const insertQuery = 'INSERT INTO users (id, fullname, email, username, password) VALUES ($1, $2, $3, $4, $5)';
    let values = [
        userId,
        data.fullname,
        data.email,
        data.username,
        data.password
    ];

    const insertQuery2 = 'insert into baskets (id, userid) values ($1, $2)';

    let values2 = [
        basketId,
        userId
    ];

    getConnection.query(insertQuery, values)
        .then(result => {
            getConnection.query(insertQuery2, values2)
                .then(result => {
                    res.cookie('id', userId);
                    res.status(201).send({"massage": "Message received and inserted into the database"});
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