const registerMiddleware = {
    checkSignUp(req, res, next) {
        const { username, password } = req.body;

        // check if email value has @(mail service).com
        // if (!(/[\w]+@[a-zA-Z]+\.[a-zA-Z]{2}/.test(email))) {
        //     return res.status(400).json({
        //         status: 'error',
        //         error: 'invalid email format'
        //     })
        // }
        if (username.length < 6) {
            return res.status(400).json({
                status: 'error',
                error: 'password length should be more than six characters'
            })
        }



        if (password.length < 6) {
            return res.status(400).json({
                status: 'error',
                error: 'password length should be more than six characters'
            })
        }

        // if (department.length < 3) {
        //     return res.status(400).json({
        //         status: 'error',
        //         error: 'department input length should be more than three characters'
        //     })
        // }

        // if (address.length < 3) {
        //     return res.status(400).json({
        //         status: 'error',
        //         error: 'address input length should be more than three characters'
        //     })
        // }
        next();
    }
}

// export registerMiddleware to routes
module.exports = registerMiddleware;