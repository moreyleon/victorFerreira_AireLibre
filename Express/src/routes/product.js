var express = require('express');
var router = express.Router();
const {list,detail,create,add,edit,update,remove,filter} = require('../controllers/productControllers');
const createValidator = require('../middleware/create')
const image = require('../middleware/upImage');





router.get('/list', list);
 
router.get('/add' , add);
router.post('/create', image.single('image'),createValidator, create);

router.get('/detail/:id' , detail);

router.get('/edit/:id' ,edit);
router.put('/update/:id', image.single('image') ,update);

router.delete('/remove/:id' ,remove) ;

router.get('/category', filter);

module.exports = router;