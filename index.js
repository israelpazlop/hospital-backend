require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

// create express server
const app = express();

//Config cors
app.use(cors());

console.log(process.env.PORT);
// databse
dbConnection();
// KOnSXKiCTQ94vIAr
// mean_user

//Routes
app.get('/', (rq, res) => {
    res.status(400).json({
        ok: true,
        msg: 'Hola Mundo'
    });
});

app.listen(process.env.PORT, () => {
    console.log('Server running in ' + process.env.PORT);
});