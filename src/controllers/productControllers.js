

const { Product } = require('../../database/models');

const { v4: uuidv4 } = require("uuid");


const producto = {

    list: async (req, res, next) => {
        try {
            const products = await Product.findAll();
            res.render('products/productsList', { products });

        } catch (error) {
        }
    },
    add: (req, res, next) => {


        res.render('products/productAdd');
    },

    create: async (req, res, next) => {

        try {

            const { name, description, categoryId, price, image } = req.body

             await Product.create({

                name,
                description,
                categoryId,
                price,
                image
            });


            return res.redirect('/product/list');



        } catch (error) {
            next(error);
        }


    },

    detail: async (req, res, next) => {

        try {
            const product = await Product.findOne({

                where: { id: req.params.id }

            });

            return res.render('products/productDetail', { product })

        } catch (error) {

        }


    },

    edit: async(req, res, next) => {
        const { id } = req.params
try {
       
   const product= await Product.findOne({ where: { id } });

if (!product) {
    return res.status(404).send('Producto no encontrado');
}

      return  res.render('products/productEdit', { product });

        
            
} catch (error) {
    console.log(error);
}

    },
    update: async (req, res, next) => {

        const { id } = req.params
        const { name, description, categoryId, price, image } = req.body
        try {
            await Product.update( {
               name,
               description,
                categoryId,
               price,
               image,
            },{
                where:{id},
            }
            );
            


            return res.redirect('/product/list');
        } catch (error) {

        }
    },
    remove: async (req, res, next) => {
        const { id } = req.params
        try {
            await Product.destroy({ where: { id } });


            return res.redirect('/product/list');
        } catch (error) {

            console.log(error);
       {

        }
    }

    },

    sports: async (req, res, next) => {
        try {

            const sports = await Product.findAll({
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

            const adventure = await Product.findAll({
                where: { categoryId: 2 }
            })
            return res.render('products/adventure', {
                adventure
            });

        } catch (error) {
            console.log(error);

        }

    }
  

       
    }



module.exports = producto;