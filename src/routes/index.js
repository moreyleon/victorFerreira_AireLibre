var express = require('express');
var router = express.Router();
const {index,admin,production} = require('../controllers/indexControllers');


router.get('/', index);
router.get('/admin' , admin); 


module.exports = router;
