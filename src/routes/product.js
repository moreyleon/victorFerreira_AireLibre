var express = require('express');
var router = express.Router();
const {detalle} = require('../controllers/productControllers');



router.get('/detalle', detalle);

/*router.get('/agregar', agregar);
router.get('/editar', editar);
*/
    

module.exports = router;