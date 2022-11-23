const sql = require("../database/db.js");

// constructor
const User = function (user) {
  this.pseudo = user.pseudo;
  this.nom = user.nom;
  this.prenom = user.prenom;
  this.password = user.password;
  this.email = user.email;
  this.isAdmin = user.isAdmin;
  this.idAvatar = user.idAvatar;
};

User.create = (newUser, result) => {
  sql.query("INSERT INTO utilisateur SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created user: ", { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};

User.findById = (userId, result) => {
  sql.query(
    `SELECT * FROM utilisateur WHERE idUser = ${userId}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found user: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found User with the id
      result({ kind: "not_found" }, null);
    }
  );
};

User.getAll = (result) => {
  sql.query("SELECT * FROM utilisateur", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

User.updateById = (id, user, result) => {
  sql.query(
    "UPDATE utilisateur SET pseudo = ?, nom = ?, prenom = ?, password = ?, email = ?, isAdmin = ?, idAvatar = ? WHERE idUser = ?",
    [
      user.pseudo,
      user.nom,
      user.prenom,
      user.password,
      user.email,
      user.isAdmin,
      user.idAvatar,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found User with the id
        result({ kind: "not_found" }, null);
        return;
      }

      result(null, { id: id, ...user });
    }
  );
};

User.remove = (id, result) => {
  sql.query("DELETE FROM utilisateur WHERE idUser = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found User with the id
      result({ kind: "not_found" }, null);
      return;
    }

    result(null, res);
  });
};

User.removeAll = (result) => {
  sql.query("DELETE FROM utilisateur", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

module.exports = User;
