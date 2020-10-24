const product = require('../models/product')

module.exports = (app) => {
    const product = require('../controllers/product')
    app.post('/product/create', product.create)
    app.put('/product/update/:id', product.update)
}