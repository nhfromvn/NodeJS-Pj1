import pool from '../config/connectDB'
let getHomepage = async (req, res) => {

    const [rows, fields] = await pool.execute('SELECT * FROM `user`');
    return res.render('index.ejs', { dataUser: rows })
}
let getDetailPage = async (req, res) => {
    let id = req.params.id;
    let user = await pool.execute(`SELECT * from  user where id= ?`, [id])
    return res.send(JSON.stringify(user[0]))
}

module.exports = {
    getHomepage, getDetailPage
}