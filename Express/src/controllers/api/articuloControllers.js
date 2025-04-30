const {Product}= require('../../database/models');


let articuloControllers = {


    getArticulos: async (req, res) => {
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
              exclude: ["created_at", "updated_at"]
            };
      
            console.log(query);
      
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

    }
}

module.exports = articuloControllers;