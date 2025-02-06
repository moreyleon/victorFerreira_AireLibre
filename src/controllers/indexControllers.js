

  const home ={

  index : (req, res ,next) => {
    res.render('index');
  },
  admin : (req, res, next) => {
    res.render('admin');
  }
}


module.exports = home;