const pg = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// connect to heroku database
const connection = {
    connectionString: process.env.DATABASE_URL,
    ssl: true
};

// connect to dev database
// const connection = {
//     database: process.env.DB_DATABASE,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT
// };

// pool
const pool = new pg.Pool(connection);

pool.on('connect', () => {})

// user table
const usersTable = async () => {
    const userTableQuery = `CREATE TABLE IF NOT EXISTS
    traders(
        id SERIAL PRIMARY KEY NOT NULL UNIQUE,
        username VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL,
        password VARCHAR(200) NOT NULL,
        verification VARCHAR(200),
        active VARCHAR(200),
        phone VARCHAR(50),
        bank VARCHAR(50),
        bankname VARCHAR(50),
        banknumber VARCHAR(50),
        joined TIMESTAMP NOT NULL
    )`;

    try {
        await pool.query(userTableQuery);
        console.log('users table created')
    }
    catch (e) {
        console.log(e)
    }
};

const contractsTables = async () => {
    const contractTable = `CREATE TABLE IF NOT EXISTS
      contracts(
            id SERIAL PRIMARY KEY NOT NULL UNIQUE,
            transactionId VARCHAR(128) NOT NULL,
            userId VARCHAR(128) NOT NULL,
            note VARCHAR(128),
            cloudinary_id VARCHAR(128) NOT NULL,
            image_url VARCHAR(128) NOT NULL,
            amount_usd VARCHAR(128) NOT NULL,
            amount_btc VARCHAR(128) NOT NULL,
            bank VARCHAR(128),
            bankname VARCHAR(128),
            banknumber VARCHAR(128),
            amt2receive VARCHAR(128),
            type VARCHAR(128),
            status VARCHAR(128) DEFAULT '0',
            created TIMESTAMP DEFAULT NOW()
        )`;

     try {
        await pool.query(contractTable);
        console.log('contracts table created')
    }
    catch (e) {
        console.log(e)
    }
};

const createTables = async () => {
  const imageTable = `CREATE TABLE IF NOT EXISTS
    images(
      id SERIAL PRIMARY KEY,
      title VARCHAR(128) NOT NULL,
      cloudinary_id VARCHAR(128) NOT NULL,
      image_url VARCHAR(128) NOT NULL
    )`;

     try {
        await pool.query(imageTable);
        console.log('images table created')
    }
    catch (e) {
        console.log(e)
    }
};

const referralsTable = async () => {
    const refTable = `CREATE TABLE IF NOT EXISTS
      referrals(
        refid SERIAL PRIMARY KEY NOT NULL UNIQUE,
        id VARCHAR(50) NOT NULL,
        refUser VARCHAR(50) NOT NULL,
        created TIMESTAMP NOT NULL
      )`;
  
       try {
          await pool.query(refTable);
          console.log('referrals table created')
      }
      catch (e) {
          console.log(e)
      }
  };

usersTable();
createTables();
referralsTable();
contractsTables();

// export pool to controllers
module.exports = pool;