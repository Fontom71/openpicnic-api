const sql = require("../database/db");

// constructor
const Avis = function (avis) {
  this.idUtilisateur = avis.idUtilisateur;
  this.idLocalisation = avis.idLocalisation;
  this.titre = avis.titre;
  this.message = avis.message;
  this.dateAvis = avis.dateAvis;
  this.note = avis.note;
};

Avis.create = (newAvis, result) => {
  sql.query("INSERT INTO avis SET ?", newAvis, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created avis: ", { id: res.insertId, ...newAvis });
    result(null, { id: res.insertId, ...newAvis });
  });
};

Avis.findById = (idU, idL, result) => {
  sql.query(
    `SELECT * FROM avis WHERE idUtilisateur = ${idU} AND idLocalisation = ${idL}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found avis: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found Avis with the id
      result({ kind: "not_found" }, null);
    }
  );
};

Avis.getAll = (result) => {
  sql.query("SELECT * FROM avis", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

Avis.updateById = (idU, idL, avis, result) => {
  sql.query(
    "UPDATE avis SET titre = ?, message = ?, dateAvis = ?, note = ? WHERE idUtilisateur = ? AND idLocalisation = ?",
    [avis.titre, avis.message, avis.dateAvis, avis.note, idU, idL],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Avis with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated avis: ", { id: idU, ...avis });
      result(null, { id: idU, ...avis });
    }
  );
};

Avis.remove = (idU, idL, result) => {
  sql.query(
    "DELETE FROM avis WHERE idUtilisateur = ? AND idLocalisation = ?",
    [idU, idL],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Avis with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("deleted avis with id: ", idU);
      result(null, res);
    }
  );
};

Avis.removeAll = (result) => {
  sql.query("DELETE FROM avis", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} avis`);
    result(null, res);
  });
};

module.exports = Avis;
