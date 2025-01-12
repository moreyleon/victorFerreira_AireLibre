const express = require('express');
const router = express.Router();
const admin = require ('../controllers/adminControllers');


router.get('/admin', admin);





module.exports = router;

