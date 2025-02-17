const fs = require('fs')
const path = require('path')
const directory = path.join(__dirname, "../data/users.json");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require('bcrypt');


const usuario = {

    register: (req, res, next) => {
        res.render('users/register');

    },
    login: (req, res, next) => {
        res.render('users/login');
    },
    process: (req, res, next) => {
        const read = (file = "") => {
            return JSON.parse(fs.readFileSync (directory, 'utf-8'))
        }
        const users = read()
        const {nombre,apellido,correo,contrasena,categoria} = req.body
        const newuser = {
            id : uuidv4(),
            nombre,
            apellido,
            correo,
            contrasena:bcrypt.hashSync(contrasena, 10),
            categoria
        }
        //
users.push(newuser)
fs.writeFileSync(directory, JSON.stringify(users), "utf-8");


        return res.redirect('/users/login');
    },
    identity: (req, res, next) => {
        const read = (file = "") => {
            return JSON.parse(fs.readFileSync (directory, 'utf-8'))
        }
        const users = read()
        const {nombre, correo} = req.body
        const user = users.find(user => user.nombre === nombre &&  correo)

req.session.userLogin = {
    id : user.id,
    name : user.nombre,

  }


        return res.redirect('/')
    },
    profile: (req, res, next) => {

    },
    logout: (req, res, next) => {

    },
    update: (req, res, next) => {

    },

    admin: (req, res, next) => {
        const read = (file = "") => {
            return JSON.parse(fs.readFileSync(path.join(__dirname, file), 'utf-8'))
        }
        const products = read('../data/products.json');

        const deportes = products.filter(producto => {
            return producto.categoria == "Deporte";
        })

        const aventura = products.filter(producto => {
            return producto.categoria == "Aventura";
        })

        res.render('users/admin');

   }

}


module.exports = usuario;