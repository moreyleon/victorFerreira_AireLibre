 const usuario = {

register: (req,res,next) => {
    res.render('register');
 
},
login : (req,res,next) => {
    res.render('login');    
}


}


module.exports = usuario;