const ProductModel = require('../models/product')

exports.create = (req, res) => {

    if(Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })
    }
    const product = new ProductModel ({
        productName: req.body.productName,
        brandName: req.body.brandName,
        description: req.body.description,
        unitM: req.body.unitM,
        quantity: req.body.quantity,
        price: req.body.price,
        productDiscount: req.body.productDiscount
    })

    product.save()
    .then((dataproduct) => {res.send(dataproduct)})
    .catch((error) => {
        res.status(500).send({
            message: error.message
        })
    })
}

exports.update=(req, res) => {
    if(Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })
    }
        const product = {
            productName: req.body.productName,
            brandName: req.body.brandName,
            description: req.body.description,
            unitM: req.body.unitM,
            quantity: req.body.quantity,
            price: req.body.price,
            productDiscount: req.body.productDiscount
        }

    ProductModel.findByIdAndUpdate(req.params.id, product)
    .then(
        (productUpdate) => {
            res.send(productUpdate)
        }
    )
    .catch(
        (error) => {
            res.status(500).send({
                message: error.message
            })
        }
    )
}