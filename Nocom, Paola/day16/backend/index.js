require('dotenv').config()
const express = require('express')

// experss app
const app = express();

// Routes
app.get('/home', (req, res)=>{
    res.json({ msg: 'Welcome to your home page!'})
})

app.post('/home', (req, res)=>{
    res.json({msg: 'This is a POST request'})
})

// app.get('/projects', (req, res)=>{
//     res.json({ msg: 'This is the project page'})
//     // res.send('<h1>Hello,</h1> projects go here')
// })

app.listen(process.env.PORT, ()=>{
    console.log('Listening to port', process.env.PORT)
})