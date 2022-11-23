const sql = require("../database/db.js");

// constructor
const Equipement = function (equipement) {
  this.nom = equipement.nom;
  this.description = equipement.description;
};

Equipement.create = (newEquipement, result) => {
  sql.query("INSERT INTO equipement SET ?", newEquipement, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created equipement: ", { id: res.insertId, ...newEquipement });
    result(null, { id: res.insertId, ...newEquipement });
  });
};

Equipement.findById = (equipementId, result) => {
  sql.query(
    `SELECT * FROM equipement WHERE idEquipement = ${equipementId}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found equipement: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found Equipement with the id
      result({ kind: "not_found" }, null);
    }
  );
};

Equipement.getAll = (result) => {
  sql.query("SELECT * FROM equipement", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

Equipement.updateById = (id, equipement, result) => {
  sql.query(
    "UPDATE equipement SET nom = ?, description = ? WHERE idEquipement = ?",
    [equipement.nom, equipement.description, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Equipement with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated equipement: ", { id: id, ...equipement });
      result(null, { id: id, ...equipement });
    }
  );
};

Equipement.remove = (id, result) => {
  sql.query("DELETE FROM equipement WHERE idEquipement = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Equipement with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted equipement with id: ", id);
    result(null, res);
  });
};

Equipement.removeAll = (result) => {
  sql.query("DELETE FROM equipement", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} equipement`);
    result(null, res);
  });
};

module.exports = Equipement;
