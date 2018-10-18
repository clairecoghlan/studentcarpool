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
  var sql = "CREATE TABLE passengers (p_name VARCHAR(255), p_email VARCHAR(255),address VARCHAR(255),p_rating int)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});