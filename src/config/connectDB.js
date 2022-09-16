// get the client
import mysql from 'mysql2/promise'

// create the connection to database
console.log("Creating pool....")
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejsprj1'
});

export default pool;