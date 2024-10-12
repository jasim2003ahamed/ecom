const express = require('express');
const { createorder } = require('../controllers/orderControllers');
const router =express.Router();

router.route('/order').post(createorder);


module.exports = router;