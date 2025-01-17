 const usuario = {

register: (req,res,next) => {
    res.render('users/register');
 
},
login : (req,res,next) => {
    res.render('users/login');    
}


}


module.exports = usuario;