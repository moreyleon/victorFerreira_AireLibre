var express = require('express');
var router = express.Router();
const {list,detail,create,edit,sports,adventure} = require('../controllers/productControllers');


router.get('/product', list);

router.get('/create' , create);
router.post('/product')

router.get('/product/:id' , detail);
;
router.get('/edit' , edit);
router.put('/product/edit',);

router.delete('/product/:id' );


router.get('/sports', sports);
router.get('/adventure', adventure);


module.exports = router;