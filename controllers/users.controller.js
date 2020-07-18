const User = require('../models/user');

const getUsers = (req, res) => {
    res.json({
        ok: true,
        msg: 'get users'
    });
}

const createUser = async(req, res) => {

    console.log(req.body);

    const { email, password, name } = req.body;

    const user = new User(req.body);

    await user.save();

    res.json({
        ok: true,
        user
    });
}




module.exports = {
    getUsers,
    createUser,
}