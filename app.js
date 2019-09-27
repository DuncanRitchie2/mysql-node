console.log("Hello from app.js!")

require('dotenv').config()

const mysql = require('mysql')
// const promisify = require('promisify')
const { promisify } = require('util')

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "MySqlNode"
})

const promisifiedQuery = promisify(connection.query).bind(connection)

const runQuery = async () => {
    try {
        let data = await promisifiedQuery(queryString);
        console.log(data);
    }
    catch (err) {
        console.log(err.sqlMessage);
    }
    finally {
        connection.end();
    }
};

const addEmail = async (email) => {
    try {
        const query = `insert into users(email) values("${email}")`;
        let data = await promisifiedQuery(query);
    }
    catch (err) {
        console.log(err.sqlMessage);
    }
}

addEmail("duncanritchie@btinternet.com");