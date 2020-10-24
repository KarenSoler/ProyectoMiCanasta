const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {type: String, required:true},
    lastName: {type: String, required:true},
    phone: {type: String, required: true},
    email: {type: String, required:true, unique: true},
    password: {type: String, required:true},
    address: {type: String, required:true},
    barrio: [{type: mongoose.Schema.Types.ObjectId, ref: 'Barrio'}]
 })
 module.exports = mongoose.model('User', userSchema)