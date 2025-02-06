const producto = {

list : (req, res,next) => {
    res.render('productList');
},

create: (req,res,next) => {
    res.render('products/productAdd');
},
detail : (req, res,next) => {
    res.render('productDetail');

},

edit: (req,res,next) => {
    res.render('products/productEdit');
},
delete: (req,res,next) => {
    res.send('productDelete');
},

sports :(req,res,next) => {
    res.render('deportes');
},
adventure :(req,res,next) => {
    res.render('aventura');
}
 

} 








module.exports = producto;