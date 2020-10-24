const express = require('express')
const mongoose= require('mongoose')

const url = 'mongodb://localhost/weatherdata'


const app = express()
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected.....')
})
app.use(express.json())

const weatherRouter = require('./routes/weatherd')
app.use('/weatherd',weatherRouter)
app.listen(9000, () => {
    console.log('server started')
})