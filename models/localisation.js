const sql = require("../database/db");

// constructor
const Localisation = function (localisation) {
  this.nom = localisation.nom;
  this.description = localisation.description;
  this.imageURL = localisation.imageURL;
  this.note = localisation.note;
  this.latitude = localisation.latitude;
  this.longitude = localisation.longitude;
};

Localisation.create = (newLocalisation, result) => {
  sql.query("INSERT INTO localisation SET ?", newLocalisation, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created localisation: ", {
      id: res.insertId,
      ...newLocalisation,
    });
    result(null, { id: res.insertId, ...newLocalisation });
  });
};

Localisation.findById = (localisationId, result) => {
  sql.query(
    `SELECT * FROM localisation WHERE idLocalisation = ${localisationId}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found localisation: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found Localisation with the id
      result({ kind: "not_found" }, null);
    }
  );
};

Localisation.findByNom = (nom, result) => {
  sql.query(`SELECT * FROM localisation WHERE nom = ${nom}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found localisation: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Localisation with the id
    result({ kind: "not_found" }, null);
  });
};

Localisation.getAll = (result) => {
  sql.query("SELECT * FROM localisation", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

Localisation.updateById = (id, localisation, result) => {
  sql.query(
    "UPDATE localisation SET nom = ?, description = ?, imageURL = ?, note = ?, latitude = ?, longitude = ? WHERE idLocalisation = ?",
    [
      localisation.nom,
      localisation.description,
      localisation.imageURL,
      localisation.note,
      localisation.latitude,
      localisation.longitude,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Localisation with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated localisation: ", { id: id, ...localisation });
      result(null, { id: id, ...localisation });
    }
  );
};

Localisation.remove = (id, result) => {
  sql.query(
    "DELETE FROM localisation WHERE idLocalisation = ?",
    id,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Localisation with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("deleted localisation with id: ", id);
      result(null, res);
    }
  );
};

Localisation.removeAll = (result) => {
  sql.query("DELETE FROM localisation", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} localisations`);
    result(null, res);
  });
};

module.exports = Localisation;
