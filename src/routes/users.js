var express = require('express');
var router = express.Router();
const {register,login,process,identity,profile,update,logout,admin} = require('../controllers/usersControllers');


router.get('/register' , register);
router.post('/process', process)

router.get('/login', login);
router.post('/identity',identity );

router.get('/logout', logout);

router.get('/profile',profile);
router.put('/update',update);

router.get('/admin', admin);




module.exports = router;
