const express = require('express')
const app = express()
const port = 4000
require('dotenv').config()

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