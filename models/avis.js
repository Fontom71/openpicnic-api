const sql = require("../database/db");

// constructor
const Avis = function (avis) {
  this.pseudo = avis.pseudo;
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

Avis.findById = (avisId, result) => {
  sql.query(`SELECT * FROM avis WHERE idAvis = ${avisId}`, (err, res) => {
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
  });
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

Avis.updateById = (id, avis, result) => {
  sql.query(
    "UPDATE avis SET pseudo = ?, idLocalisation = ?, titre = ?, message = ?, dateAvis = ?, note = ? WHERE idAvis = ?",
    [
      avis.pseudo,
      avis.idLocalisation,
      avis.titre,
      avis.message,
      avis.dateAvis,
      avis.note,
      id,
    ],
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

      console.log("updated avis: ", { id: id, ...avis });
      result(null, { id: id, ...avis });
    }
  );
};

Avis.remove = (id, result) => {
  sql.query("DELETE FROM avis WHERE idAvis = ?", id, (err, res) => {
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

    console.log("deleted avis with id: ", id);
    result(null, res);
  });
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
