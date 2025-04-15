const { Product, Category, Brand } = require("../database/models");
const { validationResult } = require("express-validator");


const producto = {
  list: async (req, res, next) => {
    try {
      const products = await Product.findAll({
        include: ["category", "brand"],
        order : [['id']]
      });
      res.render("products/productsList", { products });
    } catch (error) {}
  },
  add: async (req, res, next) => {
    try {
        const [categories, brands] = await Promise.all([
            Category.findAll(),
            Brand.findAll({
                order : [['name']]
            })
          ]) ;

          return res.render("products/productAdd",{
            categories,
            brands
          });

    } catch (error) {
        console.log(error);
        
    }
  },

  create: async (req, res, next) => {
    
    try{
    const { name, description, categoryId, brandId, price} = req.body;
      const errores = validationResult(req);
      
        if (errores.array().length > 0 && !req.file) {
      
       const brands = await Brand.findAll(); 
       const categories = await Category.findAll();
       
        res.render("products/productAdd",{
          errores:errores.mapped(),
          name,
          description,
          categoryId,
          brandId,
          price,
          brands,
          categories,
          }); 
       

       }
       await Product.create({
        name,
        description,
        categoryId,
        brandId,
        price,
        image : req.file.filename 

      });
       console.log('ERRORES DE CREATE:',errores.mapped());
        
      return res.redirect("/product/list");
    } catch (error) {
      next(error);
    }
  },

  detail: async (req, res, next) => {
    try {
      const product = await Product.findOne({
        where: { id: req.params.id },
      });

      return res.render("products/productDetail", { product });
    } catch (error) {}
  },

  edit: async (req, res, next) => {
    const { id } = req.params;
    try {

      const [product, categories, brands] = await Promise.all([
        Product.findOne({ where: { id } }),
        Category.findAll(),
        Brand.findAll()
      ]) ;
      if (!product) {
        return res.status(404).send("Producto no encontrado");
      }

      return res.render("products/productEdit", { 
        product,
        categories,
        brands
    });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res, next) => {
    const { id } = req.params;
    const { name, description, categoryId,brandId, price } = req.body;
    try {
      const product = await Product.findByPk(id)

      if (!product) {
        return res.status(404).send("Producto no encontrado");
      }

      await Product.update(
        {
          name,
          description,
          categoryId,
          brandId,
          price,
          image : req.file ? req.file.filename : product.image,
        },
        {
          where: { id },
        }
      );

      return res.redirect("/product/list");
    } catch (error) {}
  },
  remove: async (req, res, next) => {
    const { id } = req.params;
    try {
      await Product.destroy({ where: { id } });
      
      return res.redirect("/product/list");
    } catch (error) {
      console.log(error);
      {
      }
    }
  },

  filter: async (req, res, next) => {
    try {
      const {categoryId} = req.query;
      const category = await Category.findByPk(categoryId, {
        include : ['products']
      });
      return res.render("products/category", {
        category,
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = producto;
