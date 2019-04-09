var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "losthost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_DB"
});


connection.connect(function(err) {
    if(err) {
        console.error("error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;