module.exports = (app) => {
    const cliente = require('../controllers/cliente')
    app.post('/cliente/create', cliente.create)
    app.put('/cliente/update/:id', cliente.update)
    app.get('/cliente/getAll', cliente.getAll)
    app.get('/cliente/getOne/:id', cliente.getOne)
    app.delete('/cliente/delete/:id', cliente.deleteOne)
}