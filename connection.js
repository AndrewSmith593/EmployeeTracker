const mysql = require("mysql");
const util = require('util');

const connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "Thundercat12!",
    database: "employee_db"
});

// make connection
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

connection.query = util.promisify(connection.query);

// export connection for our ORM to use
module.exports = connection;

