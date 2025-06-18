const express = require("express")
const app = express()
const db = require('./config/db')
const cors = require("cors")
require('dotenv').config();
 
 // Run Database 
 db();
 app.use(cors({
     origin: process.env.PORT,
     methods:['GET','POST','PUT','DELETE'],
     allowedheaders:["Content-Type","Authorization"]
 }));
 

 app.use(express.json());


 app.listen(process.env.PORT,()=>{
    console.log(`Your server is running on port ${process.env.PORT}`)
 })