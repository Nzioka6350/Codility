import express, { urlencoded } from 'express';
import db from './db/dbConfig.js';
const app = express();

const port = process.env.DB_PORT || 3000;
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));


















app.listen(port,()=>{
    console.log("App is running at port", port);
})