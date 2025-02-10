var express = require('express');
var router = express.Router();
const {register,login,admin} = require('../controllers/usersControllers');


router.get('/register' , register);

router.get('/login', login);
 
router.get('/admin', admin);




module.exports = router;
