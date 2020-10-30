const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName: {type: String, required:true},
    brandName: {type: String, required:true},
    description: {type: String, required: true},
    unitM: {type: String, required:true},
    quantity: {type: Number, required:true},
    price: {type: Number, required:true},
    productDiscount: {type: Number, required:true}
 })
 module.exports = mongoose.model('Product', productSchema)