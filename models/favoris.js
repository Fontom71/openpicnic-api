const sql = require("../database/db.js");

// constructor
const Favoris = function (favoris) {
  this.idUtilisateur = favoris.idUtilisateur;
  this.idLocalisation = favoris.idLocalisation;
};

Favoris.create = (newFavoris, result) => {
  sql.query("INSERT INTO favoris SET ?", newFavoris, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created favoris: ", { id: res.insertId, ...newFavoris });
    result(null, { id: res.insertId, ...newFavoris });
  });
};

Favoris.findByIdL = (idL, result) => {
  sql.query(
    `SELECT * FROM favoris WHERE idLocalisation = ${idL}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found favoris: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found Favoris with the id
      result({ kind: "not_found" }, null);
    }
  );
};

Favoris.findByIdU = (idU, result) => {
  sql.query(
    `SELECT * FROM favoris WHERE idUtilisateur = ${idU}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found favoris: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found Favoris with the id
      result({ kind: "not_found" }, null);
    }
  );
};

Favoris.getAll = (result) => {
  sql.query("SELECT * FROM favoris", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

Favoris.remove = (idU, idL, result) => {
  sql.query(
    "DELETE FROM favoris WHERE idUtilisateur = ? AND idLocalisation = ?",
    [idU, idL],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Favoris with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("deleted favoris with id: ", idU + " " + idL);
      result(null, res);
    }
  );
};

Favoris.removeAll = (result) => {
  sql.query("DELETE FROM favoris", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} favoris`);
    result(null, res);
  });
};

module.exports = Favoris;
