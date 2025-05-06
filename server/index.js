const express = require('express')
const app = express()
require('dotenv').config()
const dbConnect = require('./src/db/connection')
dbConnect()
//body parse
app.use(express.json())
//bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;

const cors = require('cors')
app.use(cors())

const jwt = require('jsonwebtoken');

const port = process.env.PORT || 4000

const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ['admin','student'],
    default: 'student'
  }
});
const User = mongoose.model('User', userSchema);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})