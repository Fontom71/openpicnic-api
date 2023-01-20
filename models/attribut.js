const sql = require("../database/db");

// constructor
const Attribut = function (attribut) {
  this.IdLocalisation = attribut.IdLocalisation;
  this.IdEquipement = attribut.IdEquipement;
};

Attribut.create = (newAttribut, result) => {
  sql.query("INSERT INTO attribut SET ?", newAttribut, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created attribut: ", { id: res.insertId, ...newAttribut });
    result(null, { id: res.insertId, ...newAttribut });
  });
};

Attribut.findByIdL = (idL, result) => {
  sql.query(
    `SELECT * FROM attribut WHERE IdLocalisation = ${idL}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found attribut: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found Attribut with the id
      result({ kind: "not_found" }, null);
    }
  );
};

Attribut.findByIdE = (idE, result) => {
  sql.query(
    `SELECT * FROM attribut WHERE IdEquipement = ${idE}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found attribut: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found Attribut with the id
      result({ kind: "not_found" }, null);
    }
  );
};

Attribut.getAll = (result) => {
  sql.query("SELECT * FROM attribut", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

Attribut.updateById = (idL, idE, attribut, result) => {
  sql.query(
    "UPDATE attribut SET IdLocalisation = ?, IdEquipement = ? WHERE IdLocalisation = ? AND IdEquipement = ?",
    [attribut.IdLocalisation, attribut.IdEquipement, idL, idE],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Attribut with the id
        result(
          {
            kind: "not_found",
          },
          null
        );
        return;
      }

      console.log("updated attribut: ", { id: idL, ...attribut });
      result(null, { id: idL, ...attribut });
    }
  );
};

Attribut.remove = (idL, idE, result) => {
  sql.query(
    "DELETE FROM attribut WHERE IdLocalisation = ? AND IdEquipement = ?",
    [idL, idE],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Attribut with the id
        result(
          {
            kind: "not_found",
          },
          null
        );
        return;
      }

      console.log("deleted attribut with id: ", idL);
      result(null, res);
    }
  );
};

Attribut.removeAll = (result) => {
  sql.query("DELETE FROM attribut", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} attribut`);
    result(null, res);
  });
};

module.exports = Attribut;
