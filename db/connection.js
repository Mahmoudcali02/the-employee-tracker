const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  // My username
  user: "root",
  // My password
  password: "mqEl3Ar4pQi^JcE4",
  database: "employees"
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
