require("dotenv").config();
const express = require("express");
const router = require("./routes");
const app = express();
const port = process.env.PORT || 3000;
const url = process.env.SITE_URL || "http://localhost";
const dbName = process.env.DATABASE_NAME || "test";
const dbHost = process.env.DATABASE_HOST || "localhost";
const dbPort = process.env.DATABASE_PORT || 3306;
const db = require("./database/db");

db.connect((err) => {
  if (err) {
    console.log("Ne peut pas se connecter à la base de données");
    process.exit(1);
  } else {
    console.log(
      `Connecté à la base de données ${dbName} sur ${dbHost}:${dbPort}`
    );
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(port, () => {
  console.log(`API lancé sur ${url}:${port}`);
});
