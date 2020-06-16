const pg = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// connect to database
const connection = {
    // database: process.env.DB_DATABASE,
    // user: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // host: process.env.DB_HOST,
    connectionString: process.env.DATABASE_URL,
    port: process.env.DB_PORT,
    ssl: true
};

// pool
const pool = new pg.Pool(connection);

pool.on('connect', () => {})

// user table
const userTable = async () => {
    const userTableQuery = `CREATE TABLE IF NOT EXISTS
    employee(
        id SERIAL PRIMARY KEY NOT NULL UNIQUE,
        username VARCHAR(50),
        password VARCHAR(200)
    )`;

    try {
        await pool.query(userTableQuery);
        console.log('employee table created')
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

// article table
// const articleTable = async () => {
//     const articleTableQuery = `CREATE TABLE IF NOT EXISTS
//     articles(
//         articleId SERIAL PRIMARY KEY NOT NULL UNIQUE,
//         title VARCHAR(100) NOT NULL,
//         article VARCHAR(5000) NOT NULL,
//         authorId INT NOT NULL,
//         createdOn VARCHAR(50) NOT NULL,
//         FOREIGN KEY(authorId) REFERENCES employee(authorId)  ON DELETE CASCADE ON UPDATE CASCADE
//     )`;

//     try{
//         await pool.query(articleTableQuery);
//         console.log('article table created');
//     }
//     catch(e) {
//         console.log(e)
//     }
// };

// article comment table
// const articleCommentTable = async () => {
//     const articleCommentTableQuery = `CREATE TABLE IF NOT EXISTS
//     article_comments(
//         commentId SERIAL PRIMARY KEY NOT NULL UNIQUE,
//         comment VARCHAR(300) NOT NULL,
//         createdOn VARCHAR(50) NOT NULL,
//         authorId INT NOT NULL,
//         articleId INT NOT NULL,
//         FOREIGN KEY(articleId) REFERENCES articles(articleId),
//         FOREIGN KEY(authorId) REFERENCES employee(authorId)
//     )`;

//     try{
//         await pool.query(articleCommentTableQuery);
//         console.log('article comment table created')
//     }
//     catch(e) {
//         console.log(e)
//     }
// };

// gif table
// const gifTable = async () => {
//     const gifTableQuery = `CREATE TABLE IF NOT EXISTS
//     gifs(
//         gifId SERIAL PRIMARY KEY NOT NULL UNIQUE,
//         image VARCHAR(500) NOT NULL,
//         gifTitle VARCHAR(50) NOT NULL,
//         gifAuthorId INT NOT NULL,
//         gifCreatedOn VARCHAR(50) NOT NULL,
//         FOREIGN KEY(gifAuthorId) REFERENCES employee(authorId) ON DELETE CASCADE ON UPDATE CASCADE
//     )`;

//     try{
//         await pool.query(gifTableQuery)
//         console.log('gif table created');
//     }
//     catch(e) {
//         console.log(e)
//     }
// };

// gif comment table
// const gifCommentTable = async () => {
//     const gifCommentTableQuery = `CREATE TABLE IF NOT EXISTS
//     gif_comments(
//         commentId SERIAL PRIMARY KEY NOT NULL UNIQUE,
//         comment VARCHAR(300) NOT NULL,
//         createdOn VARCHAR(50) NOT NULL,
//         authorId INT NOT NULL,
//         gifId INT NOT NULL,
//         FOREIGN KEY(gifId) REFERENCES gifs(gifId),
//         FOREIGN KEY(authorId) REFERENCES employee(authorId) 
//     )`

//     try{
//         await pool.query(gifCommentTableQuery);
//         console.log('gif comment table created')
//     }
//     catch(e) {
//         console.log(e)
//     }
// };

// drop table
// const dropTable = async () => {
//     const dropTableQuery = `DROP TABLE IF EXISTS employee`
//     try{
//         await pool.query(dropTableQuery)
//         console.log('table dropped')
//     }
//     catch(e) {
//         console.log(e)
//     }
// }

// user
userTable();
createTables();
// article
// articleTable();
// gif
// gifTable();
// article comment
// articleCommentTable();
// gif comment
// gifCommentTable();
// dropTable
// dropTable();

// export pool to controllers
module.exports = pool;