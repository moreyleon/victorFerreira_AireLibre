var express = require('express');
var router = express.Router();
const {cart} = require('../controllers/buyControllers');
const checkUsers = require('../data/checkUsers');

router.get('/cart',cart); 



module.exports = router;