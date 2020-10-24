const express = require('express')

const cors = require('cors')
const bodyParser = require('body-parser')

const {conectDB} = require('./db')
const user = require('./models/user')
const product = require('./models/product')
const barrio = require('./models/barrio')
const tienda = require('./models/tienda')
const cliente = require('./models/cliente')
const tendero = require('./models/tendero')
const app = express()

app.use(cors())
app.use(bodyParser.json())


conectDB()
require('./routes/user')(app)
require('./routes/product')(app)
require('./routes/barrio')(app)
require('./routes/tienda')(app)
require('./routes/cliente')(app)
require('./routes/tendero')(app)

app.listen(3000, () => {
    console.log('El servidor se levanto correctamente.')
})