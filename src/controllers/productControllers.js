const producto = {

detalle : (req, res,next) => {
    res.render('productDetail');

},
 admin :  (req, res, next) => {
    res.render('admin');
 },


add: (req,res,next) => {
    res.render('productAdd');
},
edit: (req,res,next) => {
    res.render('productEdit');
},

sports :(req,res,next) => {
    res.render('deportes');
},
adventure :(req,res,next) => {
    res.render('aventura');
}

} 








module.exports = producto;