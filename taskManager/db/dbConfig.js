import dotenv from 'dotenv';
dotenv.config();


const dbConfig = {
    host:process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_HOST,
    port: process.env.DB_PORT,

}

export default dbConfig;