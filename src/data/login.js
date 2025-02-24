const loginVerify = (req, res, next) => {
    if (req.session.user) {

        res.redirect("/users/profile/" + req.session.user.id);
    } else {
        next();
    }
};

module.exports = loginVerify;