const path = require('path');
const fs = require('fs');

  const home ={

  index : (req, res ,next) => {
    const read = (file = "") => {
      return JSON.parse(fs.readFileSync(path.join(__dirname,file),'utf-8'))
  }
    const products = read('../data/products.json');

    const ofertas = products.filter(producto => {
      return producto.ofertas == "Ofertas" ;})

      const agregados = products.filter(producto => {
        return producto.agregados == "Agregados" ;})

    res.render('index',{
        ofertas :ofertas,
       agregados :agregados
    });
    
  },
  admin : (req, res, next) => {
    res.render('admin');
  }

}


module.exports = home;