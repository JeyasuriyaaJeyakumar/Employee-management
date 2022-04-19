const mongoose = require('mongoose');

const URI = "mongodb+srv://jeyasuriyaa:jeyasuriyaa@cluster0.l2xto.mongodb.net/employeeDetails?retryWrites=true&w=majority"

const connectDB = async()=>{
    await mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true});
    console.log('db connected');
}

module.exports = connectDB;