module.exports = (app) => {
    const tendero = require('../controllers/tendero')
    app.post('/tendero/create', tendero.create)
    app.put('/tendero/update/:id', tendero.update)
}