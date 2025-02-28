const fs = require('fs')
const  {read,parse,write,string} = require ("../data/filesystem")
const path = require('path')
const directorio = path.join(__dirname,'../data/products.json');

const { v4: uuidv4 } = require("uuid");


const producto = {

list : (req, res,next) => {

   const products = parse(read(directorio));
   return res.render('products/productsList',{
    products
});

},

add: (req,res,next) => {
res.render('products/productAdd');
},

create: (req,res,next) => {
    
   const create = parse(read(directorio));
    
    const {nombre, descripcion, categoria,precio} = req.body
   
    create.push({
        id: uuidv4(),
        nombre,
        descripcion,
        categoria,
        precio
    });
    

    write(directorio,string(create));

     return res.redirect('/product/list')
    
},

detail : (req, res,next) => {
    const products = parse(read(directorio));
   const product = products.find(product => product.id === +req.params.id);
   
return res.render('products/productDetail',{
        ...product
    })

},

edit: (req,res,next) => {
    const id = req.params.id;
    const products = parse(read(directorio));
    const product = products.find(product => product.id == id);
    
    

res.render('products/productEdit',{
    ...product
})
     
},
update : (req,res,next) => {
    const products =parse(read(directorio));
    const {nombre, precio, descripcion, categoria} = req.body

    const modified = products.map(product => {
        if(product.id.toString() === req.params.id){
            product.nombre = nombre.trim();
            product.precio = +precio;
            product.descripcion = descripcion.trim();
            product.categoria = categoria
        }
        return product
    })
    write(directorio,string(modified));

     return res.redirect('/product/list')
},
remove: (req,res,next) => {
    const products = parse(read(directorio));
    const id = req.params.id;
    const modified = products.filter(product => product.id != id);
    
    write(directorio,string(modified));

res.redirect('/product/list');
    


},

sports :(req,res,next) => {
    
     const products = parse(read(directorio));

     const deportes = products.filter(producto => {
        return producto.categoria == "Deporte" ;})


    res.render('products/deportes',{
       deportes
    });

},
adventure :(req,res,next) => {

    const products = parse(read(directorio));
   

   const aventura = products.filter(producto => {
      return producto.categoria == "Aventura" ;})


  res.render('products/aventura',{
     aventura
  });
},
  compra: (req,res,next)=>{


    res.render('products/productCart');
  },
  

 
}
 




module.exports = producto;