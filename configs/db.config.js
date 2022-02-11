// import mysql from 'mysql2';

// // Create the connection pool. The pool-specific settings are the defaults
// const pool = mysql.createPool({
//     host: process.env.HOST,
//     user: process.env.USER,
//     database: process.env.DB,
//     password: process.env.PW
// });

// export default pool;

import pkg from 'pg'

const { Client } = pkg;
const db = new Client({
    host: 'localhost',
    user: 'postgres',
    password: '000001',
    database: 'TodoListDB'

})

export default db;