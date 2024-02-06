require('dotenv').config()
const express = require('express')

const app = express()   // it is very importent 
const port = 8000  // yha ek variable bayna for port

app.get('/', (req, res) => {
  res.send('Hello Bro!')
})
app.get('/twitter', (req , res) => {
    res.send("Hello It's Krishna")

})
app.get('/login', (req, res) =>{
    res.send('<h1> Please Welcome to Krishna<h1>')

} )
app.get('/youtube', (req , res) => {
    res.send("<h2>Ritesh and Krishna <h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})