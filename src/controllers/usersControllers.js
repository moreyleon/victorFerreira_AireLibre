 const usuario = {

register: (req,res,next) => {
    res.render('users/register');
 
},
login : (req,res,next) => {
    res.render('users/login');    
},
admin : (req,res,next) => {
    res.render('users/admin');    

}

}


module.exports = usuario;