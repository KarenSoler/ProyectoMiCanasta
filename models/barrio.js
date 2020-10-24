const mongoose = require('mongoose')

const barrioSchema = new mongoose.Schema({
    city: {type: String, required:true},
    locality: {type: String, required:true},
    upz: {type: String, required:true},
    neighbourhood: {type: String, required:true},
 })
 module.exports = mongoose.model('Barrio', barrioSchema)