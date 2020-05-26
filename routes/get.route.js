const { Router } = require('express');
const verify = require('../controllers/register');
const get = require('../controllers/get');

// configure route 
const getRouter = Router();

getRouter.get('/feed', verify.verifyToken ,get.getAllArticlesGif);
getRouter.get('/articles/:id', verify.verifyToken ,get.getSingleArticle);
getRouter.get('/gifs/:id', verify.verifyToken, get.getSingleGif);

// export get route to server.js
module.exports = getRouter;