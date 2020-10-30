const BarrioModel = require('../models/barrio')

exports.create = (req, res) => {

    if(Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })
    }
    const barrio = new BarrioModel ({
        city: req.body.city,
        locality: req.body.locality,
        upz: req.body.upz,
        neighbourhood: req.body.neighbourhood
    })

    barrio.save()
    .then((databarrio) => {res.send(databarrio)})
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
        const barrio = {
            city: req.body.city,
            locality: req.body.locality,
            upz: req.body.upz,
            neighbourhood: req.body.neighbourhood
        }

    BarrioModel.findByIdAndUpdate(req.params.id, barrio)
    .then(
        (barrioUpdate) => {
            res.send(barrioUpdate)
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
    BarrioModel.find()        
        .then((barrios) => {res.send(barrios) })
        .catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            })
}
exports.getOne = (req, res) => {
    BarrioModel.findById(req.params.id)        
        .then((barrio) => { res.send(barrio) })
        .catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            })
}
exports.deleteOne = (req, res) => {
    BarrioModel.findByIdAndRemove(req.params.id)
        .then((barrio) => { res.send(barrio) })
        .catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            }
        )
}