const getUsers = (rq, res) => {
    res.json({
        ok: true,
        usuarios: [{
            id: 123,
            name: 'Israel Paz'
        }]
    });
}


module.exports = {
    getUsers,
}