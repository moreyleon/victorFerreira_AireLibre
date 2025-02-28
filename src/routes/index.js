var express = require('express');
var router = express.Router();
const {index} = require('../controllers/indexControllers');


router.get('/', index);

module.exports = router;
