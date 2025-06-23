const express = require("express")
const app = express()
const db = require('./config/db')
const cors = require("cors")
const authRouters = require("./Routes/AuthRoute")
require('dotenv').config();
 
const hashedPassword = require('./utils/hashPassword');

 // Run Database 
 db();
 app.use(cors({
     origin: process.env.CLIENT_URL,
     methods:['GET','POST','PUT','DELETE'],
     allowedHeaders:["Content-Type","Authorization"]
 }));
 
 app.use(express.json());

 app.use('/api/auth', authRouters);


 app.listen(process.env.PORT,()=>{
    console.log(`Your server is running on port ${process.env.PORT}`)
 })