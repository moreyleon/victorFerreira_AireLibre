

const db = require('../../database/models');

const home = {

  index: async (req, res, next) => {

    try {

      const offers = await db.Product.findAll( {

where:{ offers: "offers"}

       

      })
      
    const news = await db.Product.findAll({
    where:{ news: "news"}

   
    })
  
  
    return res.render('index', {
      offers,
      news
    });

  } catch(error) {
    console.log(error);


  }

}
}




module.exports = home;