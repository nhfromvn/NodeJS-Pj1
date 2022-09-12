// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodejsprj1'
});

// simple query
connection.query(
    'SELECT * FROM `user`',
    function (err, results, fields) {
        console.log(results); // results contains rows returned by server
    });


export default connection;