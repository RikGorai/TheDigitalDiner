const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');
const verifyToken = require('../middleware/auth.middleware');

router.post('/', verifyToken, orderController.createOrder);
router.get('/:phone', verifyToken, orderController.getOrdersByPhone);

module.exports = router;
