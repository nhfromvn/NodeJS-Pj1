import pool from '../config/connectDB';

let getAllUsers = async (req, res) => {

    const [rows, fields] = await pool.execute('SELECT * FROM user');

    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}

let createNewUser = async (req, res) => {
    let { firstName, lastName, email, phone } = req.body;

    if (!firstName || !lastName || !email || !phone) {
        return res.status(200).json({
            message: 'missing required params'
        })
    }

    await pool.execute('INSERT INTO user(firstName,lastName,email,phone) VALUES(?,?,?,?)', [firstName, lastName, email, phone])

    return res.status(200).json({
        message: 'ok'
    })
}

let updateUser = async (req, res) => {
    let { firstName, lastName, email, phone, id } = req.body;
    if (!firstName || !lastName || !email || !phone || !id) {
        return res.status(200).json({
            message: 'missing required params'
        })
    }

    await pool.execute('update user set firstName= ?, lastName = ? , email = ? , phone= ? where id = ?',
        [firstName, lastName, email, phone, id]);

    return res.status(200).json({
        message: 'ok'
    })
}

let deleteUser = async (req, res) => {
    let userId = req.params.id;
    if (!userId) {
        return res.status(200).json({
            message: 'missing required params'
        })
    }
    await pool.execute('delete from user where id = ?', [userId])
    return res.status(200).json({
        message: 'ok'
    })
}

module.exports = {
    getAllUsers, createNewUser, updateUser, deleteUser
}