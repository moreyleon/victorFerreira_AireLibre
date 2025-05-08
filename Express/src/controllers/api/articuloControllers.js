const {Product}= require('../../database/models');


let articuloControllers = {


    getProducts: async (req, res) => {
        try {
      
            const { association } = req.query;
      
            let query;
      
            if (association) {
              query = {
                include: [
                  { association: "categories" },
                  { association: "brands" },
                ],
              };
            } else {
              query = {
                order: [["createdAt", "DESC"]]
              }
            }
      
            query.attributes = { 
              exclude: ["createdAt", "updatedAt"]
            };
      
          
      
            const product = await Product.findAll(query);
           console.log(product);
      
            if (product.length === 0) {
              return res.status(404).json({
                meta: {
                  status: 404,
                  msg: "No se encuentran productos",
                },
              });
            }
      
            return res.json({
              meta: {
                status: 200,
                total: product.length,
              },
              data: product,
            });
          } catch (error) {
            console.error(error);
            res.status(404).json({
              meta: {
                status: 404,
                msg: "No se encuentran productos",
              },
            });
          }
    },
    detail: async (req, res) => {
      try {
        const id = req.params.id;
        if (!id || isNaN(+id)) {
          return res.status(400).json({
            meta: {
              status: 400,
              msg: "El no identificado",
            },
          });
        }
  
        if (id < 1) {
          return res.status(400).json({
            meta: {
              status: 400,
              msg: "Id no identificado",
            },
          });
        }
  
        const product = await Product.findByPk(id, {
          include: [
            { association: "categories" },
            { association: "brands" },
          ],
        });
  
        if (product) {
          res.json({
            meta: {
              status: 200,
            },
            data: product,
          });
        } else {
          res.status(404).json({
            meta: {
              status: 404,
              msg: "No se encuentra el producto",
            },
          });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({
          meta: {
            status: 500,
            msg: "Error en el servidor",
          },
        });
      }
    },
    store: async (req, res) => {
      try {
        const {name,description,price,size,
           image,news,offers,categoryId,brandId } = req.body;
  
        
        if (!name || !description || !price || !size || !image || !news
        || !offers || !categoryId || !brandId) {
         
          return res.status(400).json({
            meta: {
              status: 400,
              msg: "Faltan datos",
            },
          });
        }
  
        const newProduct = await Product.create({
          name,
          description,
          price,
          size,
          image,
          news,
          offers,
          categoryId,
          brandId,
        });
  
        res.status(201).json({
          meta: {
            status: 201,
            msg: "Producto encontrado",
          },
          data: newProduct,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({
          meta: {
            status: 500,
            msg: "Error en el servidor",
          },
        });
      }
    },
    
    productDelete: async (req, res) => {
      const { id } = req.params
  
      try {
  
        if (!id || isNaN(+id) || id < 1) {
          return res.status(400).json({
            meta: {
              status: 400,
              msg: "Id no identificado",
            },
          });
        }
  
        const result = await Product.destroy({
          where: {
            id: id
          }
        })
  
        console.log("result: ", result);
  
        if (result != false) {
          return res.status(200).json({
            meta: {
              status: 200,
              msg: "Producto eliminado con éxito",
            },
          });
        } else {
          return res.status(404).json({
            meta: {
              status: 404,
              msg: "No se encontró el producto",
            },
          });
        }
  
      } catch (error) {
        console.error(error);
        res.status(500).json({
          meta: {
            status: 500,
            msg: "Error en el servidor",
          },
        });
      }
  
    }
}


module.exports = articuloControllers;