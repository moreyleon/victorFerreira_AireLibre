const { User,Rol } = require("../database/models");

const { validationResult } = require("express-validator");

const bcrypt = require('bcrypt');


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
     const errores = validationResult(req);


     
     if (errores.array().length > 0) {
      res.render("users/register", {
        errores: errores.mapped(),
        name,
        mail,
        surname,
        password
      });
    } else {
      bcrypt.hash(password, 10, async function (err, hash) {
        if (err) {
          console.log("error en el hash", err);
          throw new Error("Error en el hash");
        }

      await User.create({
        name,
        surname,
        mail, 
        password: bcrypt.hashSync(password,10),
        rolId: 2,
      });
 return res.redirect('/users/login');

    })
    }

    } catch (error) {
      next(error);
  
    }
},
  
  identity: async (req, res, next) => {
const { mail, password, recordar } = req.body; 

try {
  const errores = validationResult(req);
  if (errores.array().length > 0) {
    console.log("errores: ", errores.mapped());

    res.render("users/login", {
      errores: errores.mapped(),
      mail,
    });

  }else{

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
  }

} catch (error) {
  console.error("Error en login:", error);
  return res.render("error", { message: "Error en el login", error });
}
  },
  profile: (req, res, next) => {



    res.render('users/profile')
  },
  edit:async (req, res, next) => {
    const { id } = req.params;
    
    try {
      const [user,rol] = await Promise.all([
          User.findOne({ where:{id}}),
          Rol.findAll()
      ])

      if (!user) {
        return res.status(404).send("Usuario no encontrado");
      }
      
      return res.render("users/usersEdit",{
        user,
        rol});
        
      
    } catch (error) {
      console.log(error);
    }
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
const user = await User.findByPk(id)

if(!user){
  return res.status(404).send("Usuario no encontrado")
}
    await User.update({
      name,
      surname,
      mail,
      password
    },{
      where:{id},
    })

    if (req.body.password && req.body.password2) {
      req.body.password = bcrypt.hashSync(req.body.password, 10);
    } else {
      req.body.password = User.password;
    }
 
    return res.redirect('/users/list')

   
  }catch(error){

  }

  },
list:(req, res, next) => {
    User.findAll()
    .then(user => {
      return res.render('users/usersList', { user })
    })
    .catch(error => {
      console.log(error)
    })
  },
  remove: async (req, res, next) => {
    const { id } = req.params;
    try {
      await User.destroy({ where: { id } });

      return res.redirect("/users/list");
    } catch (error) {
      console.log(error);
      {
      }
    }

  },
  admin: (req, res, next) => {

     

    return res.render('users/admin')

  }

}


module.exports = usuario;

