const express = require('express')
const app = express()
require('dotenv').config()
const dbConnect = require('./src/db/connection')
dbConnect()
//body parse
app.use(express.json())

const port = process.env.PORT

const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: String,
  email: String,
  phoneNumber: String,
  password: String,
  gender: {
    type: String,
    enum: ['male','female','other'],
    default: 'female'
  },
  role: {
    type: String,
    enum: ['admin','teacher','student'],
    default: 'student'
  }
});
const User = mongoose.model('User', userSchema);

// app.post('/users', (req, res) => {
//   User.create({name: 'AjitMan', addr: 'Drn'});
//   res.send('ok')
// })

// app.post('/register', (req, res) => {
//   User.create({name: 'AjitMan', addr: 'Drn'});
//   res.send('ok')
// })

app.post('/register', (req, res) => {
  // console.log(req.body);
  User.create(req.body);
  res.send('User Created Successfully')
})

app.get('/users', async(req, res) => {
  const data = await User.find()
  res.send(data)
})

// app.get('/me', (req, res) => {
//   // res.send('Hello World!')
//   res.send({
//     name: "Ajit",
//     balance: 100000,
//     rewardPoint: 100
//   })
// })

//query params
// const userList = [
//   'ajit', 'ram', 'mandal'
// ]

// app.get('/users', (req, res) => {
//   const searchedUser = userList.filter((item) => {
//     if(item[0] == req.query.startswith) return item
//   })
//   res.send(searchedUser)
// })

//path params
const userList = [
  {id:1, name: 'Ajit', addr: 'ktm'},
  {id:2, name: 'Ram', addr: 'ktm'},
  {id:3, name: 'Shyam', addr: 'brt'},
  {id:4, name: 'Hari', addr: 'drn'},
  {id:5, name: 'Hero', addr: 'pkr'},
]




app.get('/users/:id', (req, res) => {
  const particularUser = userList.find((item) => {
    if(item.id == req.params.id){
      return item
    }
  })
  res.send(particularUser)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})