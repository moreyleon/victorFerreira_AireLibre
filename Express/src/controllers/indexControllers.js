const db = require("../database/models");
const {Product}= require("../database/models");

const home = {
  index: async (req, res, next) => {
    try {
      const offers = await db.Product.findAll({
        where: { offers: "offers" },
      });

      const news = await db.Product.findAll({
        where: { news: "news" },
      });

      return res.render("index", {
        offers,
        news,
      });
      
    } catch (error) {
      console.log(error);
    }
  },
  cart: async (req, res, next) => {
    const id = req.params.id;
  try {
    const product = await Product.findByPk(id, {
      include: ["category", "brand"],
    });
    res.render("products/productCart", { product });
  } catch (error) {
    console.log(error);
  }
    

    
  }
};

module.exports = home;
