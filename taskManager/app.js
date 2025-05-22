import express from 'express';
import db from './db/dbConfig.js';
const app = express();

const port = process.env.DB_PORT || 3000 


app.listen(port,()=>{
    console.log("App is running at port", port);
})