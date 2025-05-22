import express from 'express';
import dbConfig from './db/dbConfig.js';
import dotenv from 'dotenv'
const app = express();

const port = process.env.DB_PORT;


app.listen(port,()=>{
    console.log("App is running at port", port);
})