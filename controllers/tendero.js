const TenderoModel = require('../models/tendero')

exports.create = (req, res) => {

    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })

    }

    const tendero = new TenderoModel({
        city: req.body.city,
        locality: req.body.locality,
        upz: req.body.upz,
        neighborhood: req.body.neighborhood
    })

    tendero.save()
        .then((datatendero) => { res.send(datatendero) })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })
        })
}

exports.update = (req, res) => {

    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })

    }

    const tendero = {
        city: req.body.city,
        locality: req.body.locality,
        upz: req.body.upz,
        neighborhood: req.body.neighborhood
    }

    TenderoModel.findByIdAndUpdate(req.params.id, tendero)
        .then(
            (tenderoUpdate) => {
                res.send(tenderoUpdate)
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
    TenderoModel.find()
        .then((tenderos) => { res.send(tenderos) })
        .catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            }
        )

}

exports.getOne = (req, res) => {
    TenderoModel.findById(req.params.id)
        .then((tendero) => { res.send(tendero) })
        .catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            }
        )

}

exports.deleteOne = (req, res) => {
    TenderoModel.findByIdAndRemove(req.params.id)
        .then((tendero) => { res.send(tendero) })
        .catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            }
        )
}
