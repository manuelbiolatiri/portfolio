const express = require('express');
const dotenv = require('dotenv');
dotenv.config()
const cookieParser = require('cookie-parser')
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const flash    = require('connect-flash');
const multer = require("multer");
const cloudinary = require("cloudinary");
const pool = require('./models/database');
const cloudinaryStorage = require("multer-storage-cloudinary");

// routers
const userRouter = require('./routes/register.route');
const articleRouter = require('./routes/article.route');
const gifRouter = require('./routes/gif.route');
const getRouter = require('./routes/get.route');
const commentRouter = require('./routes/comment.route');


// instantiate express
const app = express();
// configure bodyparser
// app.use(bodyParser.json({ extended : false }));
app.use(require("body-parser").json())
// configure cors
app.use(cors());
app.use(cookieParser('keyboard cat'));
app.use(session({
  secret: 'keyboard cat',
  cookie: { maxAge: 60000 }
}));
  // app.use(express.cookieParser('keyboard cat'));
  // app.use(express.session({ cookie: { maxAge: 60000 }}));
  app.use(flash());
//   req.flash('success', 'Registration successfully');
//   req.flash('errror', 'Registration failed');
// res.locals.message = req.flash();

const port = process.env.PORT || 3006;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
  
    next();
})

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});


// app router
app.use('/api/v1/', userRouter);
app.use('/api/v1/', articleRouter);
app.use('/api/v1', gifRouter);
app.use('/api/v1', getRouter);
app.use('/api/v1/', commentRouter);

// welcome route
app.get('/', (req, res) => {
    res.status(200).json(({
        status: 'success',
        message: 'welcome to the team work api'
    }))
})

// request blockchain.info api in json and save api data in variables

// function Price(returnPrice){
// request({
//     url: "http://blockchain.info/stats?format=json",
//     json: true
// }, function(error, response, body) {
//     returnPrice(body.market_price_usd);
//       btcPrice = body.market_price_usd;
//       btcBlocks = body.n_blocks_total;
// });
// }
// home page display current bitcoin price
app.get("/btc", function(req, res) {
  res.send("Blockchain.info Price: " + btcPrice)
});

// /blocks page display current block height
app.get("/block", function(req, res) {
  res.send("Blockchain.info current block height: " + btcBlocks)
});

app.get("/signup", function(req, res) {
        res.render('signup', {
        message: req.flash('success')
    });
    });
 
// const btc = require('bitcoin-exchange-rate')
// app.get('/', (req, res) => {
//     const currency = 'USD';
// const amount = 100;

// btc.bitcoinrate(currency, amount);
// console.log(btc.bitcoinrate);
//     res.render('index', {
//         price: btc.bitcoinrate
//     });
// });

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


app.post('/api/images', parser.single("image"), async (req, res) => {
  console.log(req.file) // to see what is returned to you

  const data = {
    image: req.file.secure_url
  };

  console.log(data.image)
  
  // inset query to run if the upload to cloudinary is successful
  const insertQuery = "INSERT INTO images (image_url) VALUES($1) RETURNING *";
  const values = [data.image];

  // execute query
  const signUpQuerys = await  pool.query(insertQuery, values)
    console.log(signUpQuerys)

    if (!signUpQuerys.rows[0]) {
          return res.status(400).json({
              status: 'error',
              error: 'image failed'
          });
      } else {
          return res.status(200).json({
              status: 'success',
              data: {
                image_url: data.image
              }
          })
        }
});

app.get("/retrieve-image/:cloudinary_id", (request, response) => {
  // data from user
  const { cloudinary_id } = request.params;
  
  db.pool.connect((err, client) => {
    // query to find image
    const query = "SELECT * FROM images WHERE cloudinary_id = $1";
    const value = [cloudinary_id];

    // execute query
    client
      .query(query, value)
      .then((output) => {
        response.status(200).send({
          status: "success",
          data: {
            id: output.rows[0].cloudinary_id,
            title: output.rows[0].title,
            url: output.rows[0].image_url,
          },
        });
      })
      .catch((error) => {
        response.status(401).send({
          status: "failure",
          data: {
            message: "could not retrieve record!",
            error,
          },
        });
      });
  });
});

// wronge routes
app.use('*', (req, res) => {
    res.status(404).json({
        status: 'error',
        error: 'wrong route'
    })
});


app.listen(port,() => {
    console.log(`app is running on ${port}`)
});

// export app for test
module.exports = app;