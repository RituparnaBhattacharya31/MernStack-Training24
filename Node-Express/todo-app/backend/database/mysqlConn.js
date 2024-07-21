const mysql = require("mysql2"); // npm i mysql2
const dotenv = require("dotenv"); // npm i dotenv
dotenv.config();

const host = process.env.DB_HOST
const connection = mysql.createConnection({
    host: host,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect((err)=>{
    if(err) {
       console.error("error connecting with DB");
       return
    }
    console.log("Connected to DB successfully")
})

module.exports = connection;