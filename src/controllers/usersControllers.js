const fs = require('fs')
const products = require('../data/products.json')
const path = require('path')

const usuario = {

register: (req,res,next) => {
    res.render('users/register');
 
},
login : (req,res,next) => {
    res.render('users/login');    
},
admin : (req,res,next) => {
    const read = (file = "") => {
          return JSON.parse(fs.readFileSync(path.join(__dirname,file),'utf-8'))
     }
     const products = read('../data/products.json');

     const deportes = products.filter(producto => {
        return producto.categoria == "Deporte" ;})

        const aventura = products.filter(producto => {
            return producto.categoria == "Aventura" ;})

    res.render('users/admin');    

}

}


module.exports = usuario;