const checkadmin = (req,res,next) => {

    if( req.session.userLogin && req.session.userLogin.categoria === 'admin'){
        return next()
        
    }
    return res.redirect('/')
}

module.exports = checkadmin;