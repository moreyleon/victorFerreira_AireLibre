const { User } = require("../../database/models");


const { v4: uuidv4 } = require("uuid");
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
     
      const { name, surname, mail, password } = req.body;
     console.log(req.body);
     
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

  
  req.session.user = { id: user.id, name: user.name, mail: user.mail };

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
  update: (req, res, next) => {

    const users = parse(read(directory));
    const id = req.params.id;
    const user = users.find((user) => user.id === id);

    req.body.id = id;
    req.body.avatar = req.file ? req.file.filename : user.avatar;


    if (req.body.contrasena && req.body.contrasena2) {
      req.body.contrasena = bcrypt.hashSync(req.body.contrasena, 10);
    } else {
      req.body.contrasena = user.contrasena;
    }

    delete req.body.contrasena2;

    const index = users.findIndex((user) => user.id === id);
    users[index] = req.body;

    write(directory, string(users));
    res.send(req.body);

  },

  admin: (req, res, next) => {



    return res.render('users/admin')

  }

}


module.exports = usuario;

// const products = parse(read(directory));

// const deportes = products.filter(producto => {
//   return producto.categoria == "Deporte";
// })

// const aventura = products.filter(producto => {
//   return producto.categoria == "Aventura";
// })