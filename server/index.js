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


const port = process.env.PORT

const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ['admin','teacher','student'],
    default: 'student'
  }
});
const User = mongoose.model('User', userSchema);

app.post('/register', async(req, res) => {
  let {email, password} = req.body;
  const hashPassword = await bcrypt.hash(password, saltRounds)
  password = hashPassword
  //left side email is from db and right side is of req.body.email
  const userExist = await User.exists({email: email})
  if(userExist){
    return res.json({msg: "Email Already Exists"})
  }
  await User.create(req.body)
  return res.json({msg: "User Registered Successfully"})
})

app.post('/login', async(req, res) => {
  const {email, password} = req.body;
  const user = await User.findOne({email: email})
  if(user){
    const isMatched = await bcrypt.compare(password, user.password);
    if(isMatched){
      res.json({msg: "Authorized"})
    }else{
      res.json({msg: "Invalid Password"})
    }
  }else{
    res.json({msg: "Email not registered"})
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})