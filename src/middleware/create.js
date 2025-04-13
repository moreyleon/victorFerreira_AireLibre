const {body} = require('express-validator');
const {Product, Brand, Category} = require('../database/models');
const path = require('path');


module.exports = [
    body('name').notEmpty().withMessage('El campo no puede estar vacio').bail().trim()
        .isAlpha().withMessage('No se permiten numeros o caracteres especiales').bail()
        .isLength({ min: 5}).withMessage("El minimo de caracters es 5 ").bail().trim(),
       
        body('description').notEmpty().withMessage('El campo no puede estar vacio').bail().trim()
          .isAlpha().withMessage('No se permiten numeros o caracteres especiales').bail()
        .isLength({ min: 5 }).withMessage("El minimo de caracteres es de 5").bail().trim(),

        body('image').custom((value, { req }) => {
            if (!req.file) {
              throw new Error('Debe subir una imagen del producto');
            }
            const extensionesPermitidas = ['jpg', 'jpeg', 'png', 'gif'];
            const extension = path.extname(req.file.originalname).toLowerCase();

            if (!extensionesPermitidas.includes(extension)) {
              throw new Error('Formato de imagen no permitido');
            }
            return true;
          }).bail(),

       body('price').notEmpty().withMessage('Coloca un valor').bail().trim().isNumeric("Debe colocar un precio").bail().trim()
       .custom((value) => {
        if (value <= 0) {
            throw new Error('El precio debe ser un valor positivo');
        }
        return true;
    }).bail(),
       
       body('categoryId').notEmpty().withMessage('Selecione una categoria').bail()
       .custom(async (value) => {
        const category = await Category.findByPk(value);
        if (!category) {
            throw new Error('La categoría seleccionada no existe');
        }
        return true;
    }).bail(),

        body('brandId').notEmpty().withMessage('Seleccione una marca').bail()
        .custom(async (value) => {
          const brand = await Brand.findByPk(value);
          if (!brand) {
              throw new Error('La marca seleccionada no existe');
          }
          return true;
      }).bail()

        .custom(async (value) => {
            const product = await Product.findOne({where:{name: value}});
            
            if (product) {
                throw new Error('El producto ya existe');
            }
            return true;
        }).bail()
    ]