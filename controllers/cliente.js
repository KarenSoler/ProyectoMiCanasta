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