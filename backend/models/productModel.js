const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:String,
    price:String,
    description:String,
    rating:String,
    image : [
        {
            image:String
        }
    ],
    category:String,
    seller:String,
    stocks:String,
    numOfReviews:String,
    createdAt:Date

})

const productModel = mongoose.model('product',productSchema);

module.exports=productModel;