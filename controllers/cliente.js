const ClienteModel = require('../models/cliente')

exports.create = (req, res) => {

    if(Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios'
        })
    }

    const cliente = new ClienteModel({
        email: req.body.email,
        password: req.body.password,
    })

    cliente.save()
    .then( () => { res.send(datacliente) } )
    .catch( (error) => { 
        res.status(500).send({
            message: error.message
        })
    })
}

exports.update = (req, res) => {    
    
    if(Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios'
        })
    }

    const cliente = {
        email: req.body.email,
        password : req.body.password,
    }
   
    ClienteModel.findByIdAndUpdate(req.params.id, cliente)
    .then(
        (clienteUpdate) => {
            res.send(clienteUpdate)
        }
    ).catch(
        (error) => {
            res.status(500).send({
                message: error.message
            })
        }
    )
}
exports.getAll = (req, res) => {
    ClienteModel.find()
    .populate('user')
    .exec()
    .then( (clientes) => {res.send(clientes) } )
    .catch(
        (error) => {
            res.status(500).send({message: error.message})
        })
}
exports.getOne = (req, res) => {
    ClienteModel.find()
    .then( (cliente) => {res.send(cliente) } )
    .catch(
        (error) => {
            res.status(500).send({message: error.message})
        })
}
exports.deleteOne = (req, res) => {
    ClienteModel.findByIdAndRemove(req.params.id)
        .then((cliente) => { res.send(cliente) })
        .catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            })
}
