const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
    user: process.env.db_user,
    host: process.env.db_host,
    database: process.env.db_database,
    password: process.env.db_password,
    port: 5432
});

module.exports = {
    query: (text, params) => {
        return pool.query(text, params)
    }
}




