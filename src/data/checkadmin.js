const checkadmin = (req,res,next) => {
console.log('Sesión actual:', req.session.userLogin);


    if( req.session.userLogin && req.session.userLogin.rolId === 1 ){
        return next()
        
    }
    return res.redirect('/')

 
}

module.exports = checkadmin;