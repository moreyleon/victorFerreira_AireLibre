var express = require('express');
var router = express.Router();
const {register,login} = require('../controllers/usersControllers');


router.get('/register' , register);

router.get('/login', login);





module.exports = router;
