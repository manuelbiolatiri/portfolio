const { Router } = require('express');
const signLogin = require('../controllers/register');
// import user middleware
const registerMiddleware = require('../middleware/register.middleware');

const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");

// configure route
const userRouter = Router();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
    });
    
    const storage = cloudinaryStorage({
    cloudinary,
    folder: "demo",
    allowedFormats: ["jpg", "png"],
    transformation: [{ width: 500, height: 500, crop: "limit" }]
    });
    
    const imageFilter = (req, file, cb) => {
      // accept image files only
      if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
        return cb(new Error("Only image files are allowed!").toString(), false);
      }
    
      return cb(null, true);
    };
    
    const parser = multer({ storage, fileFilter: imageFilter });

userRouter.post('/auth/create-user' ,signLogin.signUP);
userRouter.post('/auth/signin', signLogin.logIn);
userRouter.post('/auth/sell',parser.single("image"), signLogin.sell);
userRouter.post('/verification', signLogin.verifier);
userRouter.post('/auth/profile', signLogin.updateSignUP);
userRouter.post('/referrals/:id', signLogin.refsignUP);
userRouter.get('/getrefs/:id', signLogin.getRefs);

// export user route to server.js
module.exports = userRouter