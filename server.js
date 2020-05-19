const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'root',
    database : 'flashtoken'
  }
});

const app = express();

app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res)=> { res.send(db.users) })
app.post('/signin', signin.handleSignin(db, bcrypt))
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db)})
app.put('/image', (req, res) => { image.handleImage(req, res, db)})
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res)})

function Price(returnPrice){
request({
    url: "http://blockchain.info/stats?format=json",
    json: true
}, function(error, response, body) {
    returnPrice(body.market_price_usd);
      btcPrice = body.market_price_usd;
      btcBlocks = body.n_blocks_total;
});
}

app.get("/converter", function(req, res) {
    	Price(lastPrice)
    	const { lastPrice } = req.body;
    });
 

app.listen(3006, ()=> {
  console.log('app is running on port 3006');
})
