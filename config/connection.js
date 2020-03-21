var mysql = require("mysql");
  port = process.env.PORT || 8080;

if (port === 8080) {
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burgers_db"
});
}
else{
  process.env.DATABASE_URL;
}
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.log(err)
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
