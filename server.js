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

// instantiate express
const app = express();
// configure bodyparser
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json())
// app.use(router);
// app.use(bodyParser.json({ extended : false }));
// app.use(require("body-parser").json())
// configure cors
app.use(cors());
app.use(cookieParser(''));
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));
  // app.use(express.cookieParser('keyboard cat'));
  // app.use(express.session({ cookie: { maxAge: 60000 }}));

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

// welcome route
app.get('/', (req, res) => {
    res.status(200).json(({
        status: 'success',
        message: 'welcome to the team work api'
    }))
})

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
  const {title} = req.body
  const data = {
    asset_id: req.file.asset_id,
    image: req.file.secure_url,
    
  };

  console.log(data.image)
  console.log(req.body)
  
  // inset query to run if the upload to cloudinary is successful
  const insertQuery = "INSERT INTO images (title, cloudinary_id, image_url) VALUES($1, $2, $3) RETURNING *";
  const values = [title, data.asset_id, data.image];

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
                image_url: data.image,
                title,
                asset_id: data.asset_id,
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
// app.use('*', (req, res) => {
//     res.status(404).json({
//         status: 'error',
//         error: 'wrong route'
//     })
// });


app.listen(port,() => {
    console.log(`app is running on ${port}`)
});

// export app for test
module.exports = app;