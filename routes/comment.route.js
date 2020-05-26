const { Router } = require('express');
const verify = require('../controllers/register');
const comment = require('../controllers/comments');

// configure route
const commentRouter = Router();

commentRouter.post('/articles/:id/comment', verify.verifyToken, comment.articleComment);
commentRouter.post('/gifs/:id/comment', verify.verifyToken, comment.gifComment);

// export comment route to server.js
module.exports = commentRouter;