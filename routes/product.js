module.exports = (app) => {
    const product = require('../controllers/product')
    app.post('/product/create', product.create)
    app.put('/product/update/:id', product.update)
    app.get('/product/getAll', product.getAll)
    app.get('/product/getOne/:id', product.getOne)
    app.delete('/product/delete/:id', product.deleteOne)
}