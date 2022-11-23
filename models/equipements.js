const sql = require("../database/db");

// constructor
const Equipements = function (equipements) {
  this.idEquipement = equipements.idEquipement;
};

Equipements.create = (newEquipements, result) => {
  sql.query("INSERT INTO equipements SET ?", newEquipements, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created equipements: ", {
      id: res.insertId,
      ...newEquipements,
    });
    result(null, { id: res.insertId, ...newEquipements });
  });
};

Equipements.findById = (equipementsId, result) => {
  sql.query(
    `SELECT * FROM equipements WHERE idEquipements = ${equipementsId}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found equipements: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found Equipements with the id
      result({ kind: "not_found" }, null);
    }
  );
};

Equipements.getAll = (result) => {
  sql.query("SELECT * FROM equipements", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

Equipements.updateById = (id, equipements, result) => {
  sql.query(
    "UPDATE equipements SET idEquipement = ? WHERE idEquipements = ?",
    [equipements.idEquipement, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Equipements with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated equipements: ", { id: id, ...equipements });
      result(null, { id: id, ...equipements });
    }
  );
};

Equipements.remove = (id, result) => {
  sql.query(
    "DELETE FROM equipements WHERE idEquipements = ?",
    id,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Equipements with the id
        result(
          {
            kind: "not_found",
          },
          null
        );
        return;
      }
    }
  );
};

Equipements.removeAll = (result) => {
  sql.query("DELETE FROM equipements", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} equipements`);
    result(null, res);
  });
};

module.exports = Equipements;
