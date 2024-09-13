const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/mydatabase')

require('./models/produto')

const index = require('./routes/index')
app.use('/', index)

const produtoRouter = require('./routes/produto-route')
app.use('/produtos', produtoRouter)

module.exports = app;