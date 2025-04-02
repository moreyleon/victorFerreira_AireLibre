const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,path.join(__dirname,'../../public/images/products'));
  },
  
  filename: function (req, file, cb) {
    const uniqueSuffix = path.basename(file.originalname, path.extname(file.originalname)) + "-" + Date.now() + "-" + uuidv4() + path.extname(file.originalname);
    cb(null, uniqueSuffix);
  },
}); 

const fileFilter = (req, file, cb) => {

  const filtro = /\.(jpg|jpeg|png)$/;
  if (filtro.test(file.originalname)) {
    
    cb(null, true);
  } else {
    
    cb(null, false);
  }
};

module.exports = multer({ storage,fileFilter });
