var express = require('express');
var router = express.Router();
const {index,cart} = require('../controllers/indexControllers');
const checkUsers = require('../data/checkUsers');

router.get('/', index);
router.get('/cart/:id',checkUsers,cart);



module.exports = router;
