var express = require('express');
var router = express.Router();
const {register,login,processregister,identity,profile,update,logout,admin} = require('../controllers/usersControllers');
const upload = require('../data/upload');
const validator = require('../data/login');


router.get('/register' , register);
router.post('/process', processregister)


router.get('/login', login);
router.post('/identity',validator,identity );
router.get('/logout', logout);

router.get('/profile/:id', profile);
router.put('/profile/:id', upload.single("avatar"), update);

router.get('/admin', admin);




module.exports = router;
