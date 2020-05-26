const { Router } = require('express');
const articleController = require('../controllers/articles');
const  verify = require('../controllers/register');
// article middleware
const articleMiddleware = require('../middleware/article.middleware');

// configure route
const articleRouter = Router();

articleRouter.post('/articles', verify.verifyToken, articleMiddleware.checkPost_ModifyArticle ,articleController.createArticle);
articleRouter.patch('/articles/:id', verify.verifyToken, articleMiddleware.checkPost_ModifyArticle ,articleController.modifyArticle);
articleRouter.delete('/articles/:id', verify.verifyToken, articleController.deleteArticle);

// export article route to server.js
module.exports = articleRouter;