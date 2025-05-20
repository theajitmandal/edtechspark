const express = require('express')
const app = express()
const dbConnect = require('./src/db/connection')
const cors = require('cors')

require('dotenv').config()
dbConnect()

//body parse
app.use(express.json())
app.use(cors())

// routes
const userRoute = require('../server/src/routes/user')
app.use(userRoute)

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})