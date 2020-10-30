module.exports = (app) => {
    const tienda = require('../controllers/tienda')
    app.post('/tienda/create', tienda.create)
    app.put('/tienda/update/:id', tienda.update)
    app.get('/tienda/getAll', tienda.getAll)
    app.get('/tienda/getOne/:id', tienda.getOne)
    app.delete('tienda/delete/:id', tienda.deleteOne)
}