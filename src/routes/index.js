var express = require('express');
var router = express.Router();
const indexControllers = require('../controllers/indexControllers');

router.get('/',indexControllers); 
 

module.exports = router;
