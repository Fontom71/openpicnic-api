const sql = require("../database/db.js");

// constructor
const User = function (user) {
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
    "UPDATE utilisateur SET nom = ?, prenom = ?, password = ?, email = ?, isAdmin = ?, idAvatar = ? WHERE idUtilisateur = ?",
    [
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

      console.log("updated user: ", { id: id, ...user });
      result(null, { id: id, ...user });
    }
  );
};

User.remove = (id, result) => {
  sql.query(
    "DELETE FROM utilisateur WHERE idUtilisateur = ?",
    id,
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

      console.log("deleted user with id: ", id);
      result(null, res);
    }
  );
};

User.removeAll = (result) => {
  sql.query("DELETE FROM utilisateur", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} users`);
    result(null, res);
  });
};

User.findByEmail = (email, result) => {
  sql.query(
    `SELECT * FROM utilisateur WHERE email = '${email}'`,
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

      // not found User with the email
      result({ kind: "not_found" }, null);
    }
  );
};

User.findById = (id, result) => {
  sql.query(
    `SELECT * FROM utilisateur WHERE idUtilisateur = '${id}'`,
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

module.exports = User;
