
const db = require('../../database/models');



const { v4: uuidv4 } = require("uuid");


const producto = {

    list: (req, res, next) => {

        res.render('products/productsList', { products: db.Product });


    },

    add: (req, res, next) => {


        res.render('products/productAdd');
    },

    create: (req, res, next) => {

        const create = parse(read(directorio));

        const { nombre, descripcion, categoria, precio, imagen } = req.body

        create.push({
            id: uuidv4(),
            nombre,
            descripcion,
            categoria,
            precio,
            imagen
        });


        write(directorio, string(create));

        return res.redirect('/product/list')

    },

    detail: async (req, res, next) => {

        try {
            const product = await db.Product.findOne({

                where: { id: req.params.id }

            });
        
      return res.render('products/productDetail', { product })

    } catch(error) {

    }


},

    edit: (req, res, next) => {
        const id = req.params.id;
const products = parse(read(directorio));
const product = products.find(product => product.id == id);



res.render('products/productEdit', {
    ...product
})

    },
update: (req, res, next) => {
    const products = parse(read(directorio));
    const { nombre, precio, descripcion, categoria } = req.body

    const modified = products.map(product => {
        if (product.id.toString() === req.params.id) {
            product.nombre = nombre.trim();
            product.precio = +precio;
            product.descripcion = descripcion.trim();
            product.categoria = categoria
        }
        return product
    })
    write(directorio, string(modified));

    return res.redirect('/product/list')
},
    remove: (req, res, next) => {
        const products = parse(read(directorio));
        const id = req.params.id;
        const modified = products.filter(product => product.id != id);

        write(directorio, string(modified));

        res.redirect('/product/list');



    },

        sports: async (req, res, next) => {
            try {

                const sports = await db.Product.findAll({
                    where: { categoryId: 1 }
                })
                return res.render('products/sports', {
                    sports
                });

            } catch (error) {
                console.log(error);

            }



        },
            adventure: async (req, res, next) => {
                try {

                    const adventure = await db.Product.findAll({
                        where: { categoryId: 2 }
                    })
                    return res.render('products/adventure', {
                        adventure
                    });

                } catch (error) {
                    console.log(error);

                }

            },
                compra: (req, res, next) => {


                    res.render('products/productCart');
                },



}





module.exports = producto;