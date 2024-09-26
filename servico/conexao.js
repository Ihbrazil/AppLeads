// conexão com mysql
import mysql from   "mysql2/promise";

const pool = mysql.createPool({
    host    : 'localhost',
    user    : 'root',
    password: 'admin',
    database: 'leads_bd',
});

export default pool;
// conexão com mysql