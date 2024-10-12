const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
    cartitems:Array,
    amount:String,
    status:String,
    createdAt:Date
})

const orderModel = mongoose.model('order',orderSchema);

module.exports = orderModel;