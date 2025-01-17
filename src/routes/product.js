var express = require('express');
var router = express.Router();
const {detalle,admin,add,edit,sports,adventure} = require('../controllers/productControllers');



router.get('/detalle' , detalle);
router.get('/admin' , admin);
router.get('/add' , add);
router.get('/edit' , edit);
router.get('/sports', sports);
router.get('/adventure', adventure);


module.exports = router;