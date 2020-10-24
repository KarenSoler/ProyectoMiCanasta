const cliente = require('../models/cliente')

module.exports = (app) => {
    const cliente = require('../controllers/cliente')

    app.post('/cliente/create', cliente.create)
}