const TiendaModel = require('../models/tienda')

exports.create = (req, res) => {

    if(Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })
    }
    const tienda = new TiendaModel ({
        name: req.body.name,
        nit: req.body.nit,
        phone: req.body.phone,
        address: req.body.address
    })

    tienda.save()
    .then((datatienda) => {res.send(datatienda)})
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
        const tienda = {
            name: req.body.name,
            nit: req.body.nit,
            phone: req.body.phone,
            address: req.body.address
        }

    TiendaModel.findByIdAndUpdate(req.params.id, tienda)
    .then(
        (tiendaUpdate) => {
            res.send(tiendaUpdate)
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
exports.getAll = (req, res) => {
    TiendaModel.find()    
        .populate('barrio')    
        .exec()
        .then((tiendas) => {res.send(tiendas) })
        .catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            })
}
exports.getOne = (req, res) => {
    TiendaModel.findById(req.params.id)        
        .then((tienda) => { res.send(tienda) })
        .catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            })
}
exports.deleteOne = (req, res) => {
    TiendaModel.findByIdAndRemove(req.params.id)
        .then((tienda) => { res.send(tienda) })
        .catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            })
}