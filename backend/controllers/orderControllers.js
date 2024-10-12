const orderModel = require('../models/orderModel');
const productModel = require('../models/productModel');


//create order - /api/v1/order
exports.createorder = async (req,res,next) => {
    const cartitems = req.body;
    const amount =Number( cartitems.reduce((acc, item) => (acc + item.product.price * item.qty), 0)).toFixed(2);
    const status = 'pending';
    const order = await orderModel.create({cartitems,amount,status})

    // Updated Product Stock
        cartitems.forEach(async (item) => {
            const product = await productModel.findById(item.product._id);
            product.stock=product.stock - item.qty;
            await product.save();
        })
        
    res.json(
        {
        success: true,
        order 
        }
    )
}