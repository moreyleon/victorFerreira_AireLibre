var express = require('express');
var router = express.Router();
const {register,login,processregister,identity,profile,update,logout,edit,list,remove,admin} = require('../controllers/usersControllers');
const checkadmin = require('../data/checkadmin');
const validator = require('../middleware/validator')
const validateLogin = require('../middleware/validateLogin');


router.get('/register' , register);
router.post('/process',validator, processregister)


router.get('/login', login);
router.post('/identity',validateLogin,identity);
router.get('/logout', logout);

router.get('/edit/:id', edit);
router.put('/update/:id', edit);

router.get('/list', list);
router.delete('/remove/:id' ,remove) ;

router.get('/admin',checkadmin,admin);





module.exports = router;
