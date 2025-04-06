var express = require('express');
var router = express.Router();
const {register,login,processregister,identity,profile,update,logout,admin} = require('../controllers/usersControllers');
const checkadmin = require('../data/checkadmin');
const validator = require('../middleware/validator')
const validateLogin = require('../middleware/validateLogin');


router.get('/register' , register);
router.post('/process',validator, processregister)


router.get('/login', login);
router.post('/identity',validateLogin,identity);
router.get('/logout', logout);

router.get('/profile/:id', profile);
router.put('/profile/:id', update);

router.get('/admin',checkadmin,admin);





module.exports = router;
