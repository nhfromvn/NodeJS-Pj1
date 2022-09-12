import { Router } from 'express';
import connection from '../config/connectDB'
let getHomepage = (req, res) => {
    //logic
    let data = [];
    connection.query(
        'SELECT * FROM `user`',
        function (err, results, fields) {
            console.log('>>>check mysql')
            console.log(results); // results contains rows returned by server
            results.map((row) => {
                data.push({
                    id: row.id,
                    firstName: row.firstName,
                    lastName: row.lastName,
                    email: row.email,
                    phone: row.phone

                })
            });
            console.log('>>>check data:', data)
            return res.render('index.ejs', { dataUser: JSON.stringify(data) })

        })

}


module.exports = {
    getHomepage
}