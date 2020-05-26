const { Router } = require('express');

const gifController = require('../controllers/gifs');

const verify = require('../controllers/register');

// import gif middleware 
const gifMiddleware = require('../middleware/gif.middleware');

// configure route
const gifRouter = Router();

gifRouter.post('/gifs', verify.verifyToken, gifMiddleware.checkPostGif ,gifController.postGif);
gifRouter.delete('/gifs/:id', verify.verifyToken, gifController.deleteGif);

// export gif route to server.js
module.exports = gifRouter;