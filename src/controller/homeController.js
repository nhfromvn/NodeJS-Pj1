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
let createNewUser = async (req, res) => {
    console.log('check request', req.body)
    let { firstName, lastName, email, phone } = req.body;
    await pool.execute('INSERT INTO user(firstName,lastName,email,phone) VALUES(?,?,?,?)', [firstName, lastName, email, phone])
    return res.redirect('/')
}
let deleteUser = async (req, res) => {
    let userId = req.body.userId
    await pool.execute('DELETE from user where id= ?', [userId])
    res.redirect('/')
}
let getPageUpdate = async (req, res) => {
    let id = req.params.id;
    let [user] = await pool.execute('Select * from user where id = ?', [id]);
    return res.render('viewUpdate.ejs', { dataUser: user[0] });
}
let updateUser = async (req, res) => {
    let { firstName, lastName, email, phone, id } = req.body;
    console.log('check >>>', req.body)
    await pool.execute('update user set firstName= ?, lastName = ? , email = ? , phone= ? where id = ?', [firstName, lastName, email, phone, id]);
    return res.redirect('/');

}
module.exports = {
    getHomepage, getDetailPage, createNewUser, deleteUser, getPageUpdate, updateUser
}