const fs = require('fs')
const products = require('../data/products.json')
const path = require('path')

const producto = {

list : (req, res,next) => {
    res.render('products/productList');

},

create: (req,res,next) => {
    res.render('products/productAdd');
},

detail : (req, res,next) => {
    
   const product = products.find(product => product.id === +req.params.id);
   
return res.render('products/productDetail',{
        ...product
    })

},

edit: (req,res,next) => {
    res.render('products/productEdit');
},

delete: (req,res,next) => {
    res.send('productDelete');
},

sports :(req,res,next) => {
     const read = (file = "") => {
          return JSON.parse(fs.readFileSync(path.join(__dirname,file),'utf-8'))
     }
     const products = read('../data/products.json');

     const deportes = products.filter(producto => {
        return producto.categoria == "Deporte" ;})


    res.render('products/deportes',{
       deportes
    });

},
adventure :(req,res,next) => {

    const readJson = (file = "") => {
        return JSON.parse(fs.readFileSync(path.join(__dirname,file),'utf-8'))
   }
   const products = readJson('../data/products.json');

   const aventura = products.filter(producto => {
      return producto.categoria == "Aventura" ;})


  res.render('products/aventura',{
     aventura
  });


 
}
 

} 


module.exports = producto;