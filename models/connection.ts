// ./models/connection.ts

import mysql from 'mysql2/promise'; // instalar mysql2

export default mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'sua_senha',
    database: 'books_api',
});