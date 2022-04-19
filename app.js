const express = require('express');
const pug = require('pug');
const mongoose = require('mongoose');
const connectDB = require('./DB/connection');
const app = express();

connectDB();
app.use(express.json({extended:false}));

app.set('view engine', 'pug');


//Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/api/userModel', require('./api/User'));

const Port =process.env.Port ||  3000;

app.listen(Port,()=>console.log("server started"));


