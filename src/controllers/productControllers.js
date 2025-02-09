const fs = require('fs')
const products = require('../data/products.json')

const producto = {

list : (req, res,next) => {
    res.render('products/productList');

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
    res.render('products/deportes');
},
adventure :(req,res,next) => {
    res.render('products/aventura');
}
 

} 








module.exports = producto;