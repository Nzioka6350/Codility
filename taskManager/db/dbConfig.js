import mysql2 from 'mysql2'
import dotenv from 'dotenv';
dotenv.config();


const db = mysql2.createPool({
    host:process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,

}
)

export default db;