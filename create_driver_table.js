var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE driver (d_name VARCHAR(255), d_email VARCHAR(255),d_address VARCHAR(255),d_rating int)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});