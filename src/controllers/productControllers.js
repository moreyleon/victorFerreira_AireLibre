const fs = require('fs')
const path = require('path')
const directorio = path.join(__dirname,'../data/products.json');
const read = () => {
        return JSON.parse(fs.readFileSync(directorio,"utf-8"))
}
const { v4: uuidv4 } = require("uuid");


const producto = {

list : (req, res,next) => {

   const products = read();
   return res.render('products/productsList',{
    products
});

},

add: (req,res,next) => {
res.render('products/productAdd');
},

create: (req,res,next) => {
    
   const create = read();
    
    const {nombre, descripcion, categoria,precio} = req.body
   
    create.push({
        id: uuidv4(),
        nombre,
        descripcion,
        categoria,
        precio
    });
    

    fs.writeFileSync(directorio, JSON.stringify(create), "utf-8");

     return res.redirect('/product/list')
    
},

detail : (req, res,next) => {
    const products = read();
   const product = products.find(product => product.id === +req.params.id);
   
return res.render('products/productDetail',{
        ...product
    })

},

edit: (req,res,next) => {
    const id = req.params.id;
    const products = read();
    const product = products.find(product => product.id == id);
    
    

res.render('products/productEdit',{
    ...product
})
     
},
update : (req,res,next) => {
    const products = read();
    const {nombre, precio, descripcion, categoria} = req.body

    const modified = products.map(product => {
        if(product.id === +req.params.id){
            product.nombre = nombre.trim();
            product.precio = +precio;
            product.descripcion = descripcion.trim();
            product.categoria = categoria
        }
        return product
    })
    fs.writeFileSync(directorio, JSON.stringify(modified), "utf-8");

     return res.redirect('/product/list')
},
remove: (req,res,next) => {
    const products = read();
    const id = req.params.id;
    const remove = products.filter(product => product.id != id);
    writeFile(directorio, remove);


    
res.redirect('/product/list');

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