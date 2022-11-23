const mysql = require("mysql");
const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST || "localhost",
  port: process.env.DATABASE_PORT || 3306,
  user: process.env.DATABASE_USER || "root",
  password: process.env.DATABASE_PASSWORD || "",
  database: process.env.DATABASE_NAME || "test",
});

module.exports = connection;
