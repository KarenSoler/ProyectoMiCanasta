const mongoose = require('mongoose')

const tiendaSchema = new mongoose.Schema({
    name: {type: String, required:true},
    nit: {type: String, required:true},
    phone: {type: String, required: true},
    address: {type: String, required:true}
 })
 module.exports = mongoose.model('Tienda', tiendaSchema)