const { Router } = require('express');
const signLogin = require('../controllers/register');
// import user middleware
const registerMiddleware = require('../middleware/register.middleware');

// configure route
const userRouter = Router();

userRouter.post('/auth/create-user' ,signLogin.signUP);
userRouter.post('/auth/signin', signLogin.logIn);
userRouter.post('/verification', signLogin.verifier);
userRouter.post('/auth/profile', signLogin.updateSignUP);
userRouter.post('/referrals/:id', signLogin.refsignUP);
userRouter.get('/getrefs/:id', signLogin.getRefs);

// export user route to server.js
module.exports = userRouter