var express = require('express');
var router = express.Router();
const {list,detail,create,add,edit,update,remove,sports,adventure} = require('../controllers/productControllers');

const image = require('../middleware/upImage');





router.get('/list', list);

router.get('/add' , add);
router.post('/create',image.single('image'), create);

router.get('/detail/:id' , detail);

router.get('/edit/:id' ,edit);
router.put('/update/:id' ,update);

router.delete('/remove/:id' ,remove) ;


router.get('/sports', sports);
router.get('/adventure', adventure);


module.exports = router;