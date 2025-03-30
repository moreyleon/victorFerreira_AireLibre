const { User } = require("../../database/models");


const { v4: uuidv4 } = require("uuid");
const bcrypt = require('bcrypt');
const { where } = require("sequelize");





const usuario = {

  register: (req, res, next) => {
    res.render('users/register');

  },
  login: (req, res, next) => {

    res.render('users/login');
  },
  processregister: async (req, res, next) => {
    
    try {
   
     
     const { mail,name, surname, password } = req.body;

      await User.create({
        name,
        surname,
        mail, 
        password: bcrypt.hashSync(password,10),
        rolId: 2,
      });



      return res.redirect('/users/login');

    } catch (error) {
      next(error);
  
    }
},
  
  identity: async (req, res, next) => {


const { mail, password, recordar } = req.body; 

try {
  
  const user = await User.findOne({ where: { mail } });


  if (!user) {
    return res.render("users/login", { error: "El usuario no existe" });
  }


  const compararContrasena = bcrypt.compareSync(password, user.password);
  if (!compararContrasena) {
    return res.render("users/login", { error: "Contraseña incorrecta" });
  }

  
  req.session.userLogin = { id: user.id, name: user.name, mail: user.mail, rolId: user.rolId };

  if (recordar) {
    res.cookie("user", req.session.user, { maxAge: 1000 * 60 * 60 }); 
  }

  return res.redirect("/");

} catch (error) {
  console.error("Error en login:", error);
  return res.render("error", { message: "Error en el login", error });
}
  },
  profile: (req, res, next) => {



    res.render('users/profile')
  },
  logout: (req, res, next) => {
    req.session.destroy();
    res.clearCookie("user");
    res.redirect("/users/login");

  },
  update: async (req, res, next) => {

    
    const id = req.params.id;
    const { name, surname,mail,password } = req.body
try{
    await User.update({
      name,
      surname,
      mail,
      password
    },{
      where:{id},
    })

    if (req.body.contrasena && req.body.contrasena2) {
      req.body.contrasena = bcrypt.hashSync(req.body.contrasena, 10);
    } else {
      req.body.contrasena = User.contrasena;
    }
 
    return res.redirect('/')

   
  }catch(error){

  }

  },



  admin: (req, res, next) => {

     

    return res.render('users/admin')

  }

}


module.exports = usuario;

