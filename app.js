const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const postsRouter = require('./routs/posts')
const cors = require('cors')

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use('/api/posts', postsRouter)
app.get('/', (req, res) => {
  res.send('<h1>This is a simple REST API application</h1>')
})

async function start() {
    try {
      await mongoose.connect(
        process.env.DB_CONNECTION,
        {useNewUrlParser: true}, 
        () => console.log('connected to DB')
        )
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
    } catch (e) {
      console.log(e)
    }
    
   
}

start()
