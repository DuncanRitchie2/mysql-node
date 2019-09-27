console.log("Hello from app.js!")

require('dotenv').config()

const mysql = require('mysql')
const { promisify } = require('util')

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "MySqlNode"
})

const promisifiedQuery = promisify(connection.query).bind(connection)

const runQuery = async () => {
    console.log("Running runQuery()!")
    try {
        let queryString = "select count(*) from users;";
        let data = await promisifiedQuery(queryString);
        console.log("data[0] = "+data[0]);
    }
    catch (err) {
        console.log("Error message = "+err.sqlMessage);
    }
    finally {
        connection.end();
    }
};

const addEmail = async (emailAddress) => {
    console.log("Running addEmail()!")
    try {
        const query = `insert into users(email) values (${emailAddress})`;
        let data = await promisifiedQuery(query);
        console.log("data = " + data);
    }
    catch (err) {
        console.log("Error message = "+err.sqlMessage);
    }
    finally {
        runQuery();
    }
}


//////
////// Code for adding fake data using faker.
//////

// const faker = require('faker');

// const fakePerson = {
//     email: faker.internet.email()
// };

// const bulkFakeCreate = () => {
//     let people = [];
//     for (let i = 0; i < 500; i++) {
//         people.push([faker.internet.email(), faker.date.past()])
//     }
//     return people;
// };

// const bulkAddEmail = async () => {
//     console.log("Running addEmail()!")
//     try {
//         const query = `insert into users(email, created_at) values ?`;
//         let data = await promisifiedQuery(query, [bulkFakeCreate()]);
//         console.log("data = " + data);
//     }
//     catch (err) {
//         console.log("Error message = "+err.sqlMessage);
//     }
//     finally {
//         runQuery();
//     }
// }



addEmail("duncanritchie@btinternet.com");