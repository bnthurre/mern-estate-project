const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

const userRouter = require('./routes/user.route.js');


mongoose.connect(process.env.DB).then(()=>{
    console.log("connected to the databse ");
}).catch((err)=>{
    console.log(err)
});

const app = express();

app.use('/api/user', userRouter)

app.listen(3000, ()=>{
    console.log("server running on post 3000!")
})