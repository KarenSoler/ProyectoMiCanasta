module.exports = (app) => {
    const barrio = require('../controllers/barrio')
    app.post('/barrio/create', barrio.create)
    app.put('/barrio/update/:id', barrio.update)
}