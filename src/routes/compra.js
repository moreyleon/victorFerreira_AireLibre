var express = require('express');
var router = express.Router();
const compra = require('../controllers/compraControllers');


router.get('/compra', compra.compra); 



module.exports = router;