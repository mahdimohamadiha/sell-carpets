const { Client } = require('pg')
const client = new Client({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'postgres',
    password: 'mahdi123456',
    port: 5432,
  });
// Connect to the PostgreSQL database
client.connect();

module.exports= client;
