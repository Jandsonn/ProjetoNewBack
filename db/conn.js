const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 10,
    host:'localhost',
    user:'root',
    password:'jandefake3',
    database: 'nodemysql3',
})

module.exports = pool