const mongoose = require('mongoose')

const tenderoSchema = new mongoose.Schema({
    city: {type: String, required: true}, 
    locality: {type: String, required: true},
    upz: {type: String, required: true},
    neighborhood: {type: String, required: true}
})
module.exports = mongoose.model('Tendero', tenderoSchema)