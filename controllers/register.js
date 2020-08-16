const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const pool = require('../models/database');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'emmanuelbiolatiri49@gmail.com',
        pass:'biolatiriel123'
    }
});


const register = {
    async signUP(req, res) {
        // body values
        const { username, email, password} = req.body;
        console.log(req.body);
        try {
            // empty body values
            if(email === '' || password === '' || username === '') {
                return res.status(400).json({
                    status: 'error',
                    error: 'all fields are required'
                });
            };
console.log(req.body);

const verify = Math.floor((Math.random() * 10000000) + 1);

const mailOption = {
    from :'emmanuelbiolatiri49@gmail.com', // sender this is your email here
    to : email, // receiver email2
    subject: "Account Verification",
    html: `<h1>Hello Chief Please Copy your verification code<h1><br><hr>
    <h2>${verify}</h2>`
}


            // generate bcrypt salt
            const salt = await bcrypt.genSalt(10);
            // hash password
            const hashedPassword = await bcrypt.hash(password, salt);

            // check if user exist (email check)
            const checkQuery = `SELECT * FROM traders WHERE username=$1 OR email=$2`;
            const value = [username, email];
            const check = await pool.query(checkQuery, value);

            // check if user exist response
            if (check.rows[0]) {
                return res.status(400).json({
                    status: 'error',
                    error: 'user already exist'
                });
            }
            else {
                // users sign up
                const signUpQuery = `INSERT INTO traders (username, email, password,verification, joined)
                VALUES($1, $2, $3, $4, now()) RETURNING *`
                const userValue = [username, email, hashedPassword, verify];
                const signUpQuerys = await pool.query(signUpQuery, userValue);

                // generate user token
                jwt.sign({ username, password }, process.env.SECRET_KEY, { expiresIn: '24h' }, (err, token) => {
                    // token response
                    res.status(201).json({
                        status: 'success',
                        data: {
                            message: 'user account successfully created',
                            token,
                            authorId: signUpQuerys.rows[0].id
                        }
                    })
                
                     const mailerGo =  transporter.sendMail(mailOption,(error,result)=>{
                                if(error){
                                    console.log(error)
                                }else{
                                    console.log(result);
                                        // token response
                                        res.status(201).json({
                                            status: 'success',
                                            data: {
                                                message: 'user account successfully created',
                                                userId: signUpQuerys.rows[0].id
                                            }
                                        })
                                }
                            })
                            console.log(mailerGo());
                            
                    
                    });
        }
    }
        catch (e) {
            console.log(e);
        };
    },
    async updateSignUP(req, res) {
        // body values
        const { id, phone, bank,  bankname, banknumber} = req.body;
        console.log(req.body);
        try {
            // empty body values
            // if(phone === '' || bank === '' || bankname === '' || banknumber === '') {
            //     return res.status(400).json({
            //         status: 'error',
            //         error: 'all fields are required'
            //     });
            // };
console.log(req.body);

            // check if user exist (email check)
            const checkQuery = `SELECT id, phone, bank, bankname, banknumber FROM traders WHERE phone=$1 AND bank=$2 AND bankname=$3 AND banknumber=$4 AND id=$5`;
            const value = [phone, bank,  bankname, banknumber,id];
            const check = await pool.query(checkQuery, value);
console.log(id)
            // check if user exist response
            if (check.rows[0]) {
                return res.status(400).json({
                    status: 'error',
                    error: 'account already verified'
                });
            }
            else {
                // users account update
                const signUpQuery = `UPDATE traders SET phone =$1, bank =$2, bankname=$3, banknumber=$4 WHERE id =$5
                RETURNING *`
                const userValue = [phone, bank,  bankname, banknumber, id];
                const signUpQuerys = await pool.query(signUpQuery, userValue);

                    res.status(201).json({
                        status: 'success',
                        message: 'account successfully updated'
                    })
        }
    }
        catch (e) {
            console.log(e);
        };
    },
    async refsignUP(req, res) {
        // body values
        const { username, email, password} = req.body;
        console.log(req.body);
        try {
            // empty body values
            if(email === '' || password === '' || username === '') {
                return res.status(400).json({
                    status: 'error',
                    error: 'all fields are required'
                });
            };
console.log(req.body);

const verify = Math.floor((Math.random() * 10000000) + 1);

const mailOption = {
    from :'emmanuelbiolatiri49@gmail.com', // sender this is your email here
    to : email, // receiver email2
    subject: "Account Verification",
    html: `<h1>Hello Chief Please Copy your verification code<h1><br><hr>
    <h2>${verify}</h2>`
}

            // generate bcrypt salt
            const salt = await bcrypt.genSalt(10);
            // hash password
            const hashedPassword = await bcrypt.hash(password, salt);

            // check if user exist (email check)
            const checkQuery = `SELECT * FROM traders WHERE username=$1 OR email=$2`;
            const value = [username, email];
            const check = await pool.query(checkQuery, value);

            // check if user exist response
            if (check.rows[0]) {
                return res.status(400).json({
                    status: 'error',
                    error: 'user already exist'
                });
            }
            else {
                // users sign up
                const signUpQuery = `INSERT INTO traders (username, email, password,verification, joined)
                VALUES($1, $2, $3, $4, now()) RETURNING *`
                const userValue = [username, email, hashedPassword, verify];
                const signUpQuerys = await pool.query(signUpQuery, userValue);

                // generate user token
                jwt.sign({ username, password }, process.env.SECRET_KEY, { expiresIn: '24h' }, (err, token) => {
                    // token response
                    res.status(201).json({
                        status: 'success',
                        data: {
                            message: 'user account successfully created',
                            token,
                            authorId: signUpQuerys.rows[0].authorid
                        }
                    })

                    function mailerGo  (err, result) {
                        if (err) {
                            console.log(err)
                        } else {
                            transporter.sendMail(mailOption,(error,ress)=>{
                                if(error){
                                    console.log(error)
                                }else{
                                        // token response
                                        res.status(201).json({
                                            status: 'success',
                                            data: {
                                                message: 'user account successfully created',
                                                userId: signUpQuerys.rows[0].id
                                            }
                                        })
                                }
                            })
                            console.log('Data Successfully insert')
                            
                        }
                    };
                    mailerGo();
                })

                // add to referrals table
                const refsignUpQuery = `INSERT INTO referrals (id, refuser, created)VALUES($1, $2, now()) RETURNING *`
                const refuserValue = [`${req.params.id}`, signUpQuerys.rows[0].id];
                const refsignUpQuerys = await pool.query(refsignUpQuery, refuserValue);
                console.log(refsignUpQuerys.rows[0])
            };
        }
        catch (e) {
            console.log(e);
        };
    },
    async logIn(req, res) {
        // body values
        const { username, password } = req.body;
        // const { id } = req.params;

        try {
            // empty body values
            if (!username || !password) {
                return res.status(400).json({
                    status: 'error',
                    error: 'all fields are required'
                });
            };

            // username check (if user with email exist) 
            const logIn = `SELECT * FROM traders WHERE username=$1`;
            const value = [username];
            const logInQuery = await pool.query(logIn, value);

            // username check response
            if (!logInQuery.rows[0]) {
                return res.status(400).json({
                    status: 'error',
                    error: 'username does not exist, please sign up'
                });
            };

            // compare password
            bcrypt.compare(password, logInQuery.rows[0].password, (err, result) => {
                
                if (username === logInQuery.rows[0].username && result === true && logInQuery.rows[0].active === 'verified') {
                    jwt.sign({id:logInQuery.rows[0].id ,
                        active: logInQuery.rows[0].active,
                                verification: logInQuery.rows[0].verification,
                                phone: logInQuery.rows[0].phone,
                                bank: logInQuery.rows[0].bank,
                                bankname: logInQuery.rows[0].bankname,
                                banknumber: logInQuery.rows[0].banknumber,
                        username, password }, process.env.SECRET_KEY, { expiresIn: '24h' }, (err, token) => {
                        res.status(201).json({
                            status: 'success',
                            message: 'User successfully logged in',
                            data: {
                                token,
                                id: logInQuery.rows[0].id,
                                active: logInQuery.rows[0].active,
                                verification: logInQuery.rows[0].verification,
                                phone: logInQuery.rows[0].phone,
                                bank: logInQuery.rows[0].bank,
                                bankname: logInQuery.rows[0].bankname,
                                banknumber: logInQuery.rows[0].banknumber,
                            }
                        })
                    })
                }
                // incorrect email and password
                else {
                    res.status(403).json({
                        status: 'error',
                        error: 'token not generated, incorrect email or password'
                    });
                }
            });
        }
        catch (e) {
            console.log(e)
        };
    },
    // verification 
// app.get('/verification/',(req,res)=>{
    async verifier(req, res) {
        const {verify} = req.body;
        try {

            // email check (if user with email exist) 
            const  logIn = `SELECT * FROM traders WHERE verification=$1`;
            const value = [verify];
            const logInQuery = await pool.query(logIn, value);

             // username check response
             if (!logInQuery.rows[0]) {
                return res.status(400).json({
                    status: 'error',
                    error: 'username does not exist & incorrect token, please sign up'
                });
            };
            console.log(verify === logInQuery.rows[0].verification);
            // const result = verify === logInQuery.rows[0].verification;
            
                // const {verify} = req.body;
                if (verify === logInQuery.rows[0].verification) {
                    const  ver = `UPDATE traders SET active =$1 WHERE verification =$2`;
            const val = ['verified', verify];
            const quer = await pool.query(ver, val, (err, token) => {
                res.status(201).json({
                    status: 'success',
                    message: 'Account successfully verified',
                    data: {
                        token,
                        id: logInQuery.rows[0].id
                    }
                })
            });
                }
                // incorrect token
                else {
                    console.log(err);
                    res.status(403).json({
                        status: 'error',
                        error: 'token not generated, incorrect email or password'
                    });
                }
            } catch (e) {
                console.log(e)
            };
            
    },
    async getRefs(req, res) {
        const {id} = req.params;
        try {

            const  refs = `SELECT COUNT( id )
            FROM referrals WHERE id=$1`;
            const value = [id];
            const refQuery = await pool.query(refs, value, (err, data) => {
                if(err){
                    console.log(err)
                }else{
                res.status(201).json({
                    status: 'success',
                    message: 'referrals gotten',
                    data
                })
            }
            });
            
        } catch (e) {
            console.log(e)
        };
    },

    
// });
    // token verification
    verifyToken(req, res, next) {
        // header key and value
        const headers = req.headers['authorization'];

        if (typeof headers !== 'undefined') {
            const beareHeader = headers.split(' ');
            const token = beareHeader[1];

            req.token = token
            next();
        }
        else {
            // incorrect header and value
            res.status(403).json({
                status: 'error',
                error: 'forbidden'
            });
        };
    }
};

// export register routes
module.exports = register;