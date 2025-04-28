const express = require('express');
const router = express.Router();
const {getArticulos} = require('../../controllers/api/articuloControllers');

router.get('/', getArticulos); 


module.exports = router;