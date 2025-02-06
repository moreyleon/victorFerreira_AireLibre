var express = require('express');
var router = express.Router();
const {detail,create,edit,sports,adventure} = require('../controllers/productControllers');


router.get('/products');

router.get('/create' , create);
router.post('/products')

router.get('/products/:id' , detail);
;
router.get('/edit' , edit);
router.put('/products/edit',);

router.delete('/products/:id' );


router.get('/sports', sports);
router.get('/adventure', adventure);


module.exports = router;