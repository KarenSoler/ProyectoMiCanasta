module.exports = (app) => {
    const barrio = require('../controllers/barrio')
    app.post('/barrio/create', barrio.create)
    app.put('/barrio/update/:id', barrio.update)
    app.get('/barrio/getAll', barrio.getAll)
    app.get('/barrio/getOne/:id', barrio.getOne)
    app.delete('/barrio/delete/:id', barrio.deleteOne)
}