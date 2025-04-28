const { body } = require("express-validator");
const bcrypt = require("bcrypt");
const { User } = require("../database/models");


async function comparePass(pass, hash) {
  return await bcrypt.compare(pass, hash);
}

module.exports = [
  body("mail") .notEmpty().withMessage("El campo no puede estar vacio").bail().isEmail().withMessage("El campo debe ser un correo").bail()
    .custom(async (value) => {
      try {
        const user = await User.findOne({ where: { mail: value } });

        if (!user) {
          throw new Error("Las credenciales no son validas");
        }

        return true;
      } catch (error) {
        console.log(error);
        throw new Error("Las credenciales no son validas");
      }
    })
    .bail(),

  body("password").notEmpty().withMessage("Repita con").bail().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,20}$/)
    .withMessage("No cumple con los requisitos, debe contener una mayuscula, minuscula, un valor numerico y un caracter especial. La longitud debe ser entre 8 y 20 caracteres")
    .bail()
    .custom(async (value, { req }) => {
      try {
        const user = await User.findOne({ where: { mail: req.body.mail } });
        

        const result = await comparePass(value, user.password);

        if (!result) {
          throw new Error("Las credenciales no son validas");
        }

        console.log("resultado de la comparación", result);

        return true;
      } catch (error) {
        console.log(error);
        throw new Error("Las credenciales no son validas");
      }
    })
    .bail(),

  
];
