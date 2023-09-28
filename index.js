const express = require('express')
const app = express()
require('dotenv').config()
const connection=require('./db')
const mongoose = require('mongoose')
const userRouter= require('./routes/userRouter')
const Auth= require('./middlwares/auth')
const cors= require('cors')
const blogRoute = require('./routes/blogRoutes')

app.use(express.json())
app.use(cors())
app.use('/blogs',Auth,blogRoute)
app.use('/users',userRouter)

app.get('/', (req,res) => {
    res.send('Welcome to your blog')
})


app.listen(3000,async()=>{
    try{
          await connection;
          console.log('connected to db');
          console.log('running at port 8000');
    }
    catch(err){
        console.log(err);
    }
})