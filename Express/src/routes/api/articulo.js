const express = require('express');
const router = express.Router();
const {getProducts,detail,store,productDelete} = require('../../controllers/api/articuloControllers');

router.get('/', getProducts);
router.get('/detail/:id', detail)
router.post('/create', store)
router.delete('/deleteMovie/:id', productDelete)



module.exports = router;