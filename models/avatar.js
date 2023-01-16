const sql = require("../database/db.js");

// constructor
const Avatar = function (avatar) {
  this.nomAvatar = avatar.nomAvatar;
  this.imageURL = avatar.imageURL;
};

Avatar.create = (newAvatar, result) => {
  sql.query("INSERT INTO avatar SET ?", newAvatar, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created avatar: ", { id: res.insertId, ...newAvatar });
    result(null, { id: res.insertId, ...newAvatar });
  });
};

Avatar.findById = (avatarId, result) => {
  sql.query(`SELECT * FROM avatar WHERE idAvatar = ${avatarId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found avatar: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Avatar with the id
    result({ kind: "not_found" }, null);
  });
};

Avatar.getAll = (result) => {
  sql.query("SELECT * FROM avatar", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

Avatar.updateById = (id, avatar, result) => {
  sql.query(
    "UPDATE avatar SET nomAvatar = ?, imageURL = ? WHERE idAvatar = ?",
    [avatar.nomAvatar, avatar.imageURL, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Avatar with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated avatar: ", { id: id, ...avatar });
      result(null, { id: id, ...avatar });
    }
  );
};

Avatar.remove = (id, result) => {
  sql.query("DELETE FROM avatar WHERE idAvatar = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Avatar with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted avatar with id: ", id);
    result(null, res);
  });
};

Avatar.removeAll = (result) => {
  sql.query("DELETE FROM avatar", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} avatars`);
    result(null, res);
  });
};

module.exports = Avatar;
