module.exports = (app) => {
    const tendero = require('../controllers/tendero')
    app.post('/tendero/create', tendero.create)
    app.put('/tendero/update/:id', tendero.update)
    app.get('/tendero/getAll', tendero.getAll)
    app.get('/tendero/getOne/:id', tendero.getOne)
    app.delete('/tendero/delete/:id', tendero.deleteOne)
}