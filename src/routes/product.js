var express = require('express');
var router = express.Router();
const {list,detail,create,add,edit,update,remove,sports,adventure,compra} = require('../controllers/productControllers');
const session = require('../middleware/session');
const image = require('../middleware/upImage');




router.get('/list', list);

router.get('/add' , add);
router.post('/create',image.single('imagen'), create);

router.get('/detail/:id' , detail);

router.get('/edit/:id'  ,edit);
router.put('/update/:id' ,update);

router.delete('/remove/:id' ,remove) ;

router.get('/compra',session, compra);
router.get('/sports', sports);
router.get('/adventure', adventure);


module.exports = router;