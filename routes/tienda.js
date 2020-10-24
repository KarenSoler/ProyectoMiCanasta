module.exports = (app) => {
    const tienda = require('../controllers/tienda')
    app.post('/tienda/create', tienda.create)
    app.put('/tienda/update/:id', tienda.update)
}