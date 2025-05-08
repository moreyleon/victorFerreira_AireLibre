const checkUsers = (req,res,next) => {
console.log('Sesión actual:', req.session.userLogin);


    if(req.session.userLogin && req.session.userLogin.rolId === 2 ){
        return next()
        
    }
    return res.redirect('/users/login')


}

module.exports = checkUsers;