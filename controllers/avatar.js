const avatar = require("../models/avatar.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Le contenu ne peut pas être vide!",
    });
  }

  avatar.create(req.body, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message ||
          "Une erreur s'est produite lors de la création de l'avatar.",
      });
    } else res.send(data);
  });
};

exports.find = (req, res) => {
  if (!req.query.idAvatar)
    avatar.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message ||
            "Une erreur s'est produite lors de la récupération des avatars.",
        });
      else res.send(data);
    });
  else {
    avatar.findById(req.query.idAvatar, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Avatar introuvable avec l'id ${req.query.idAvatar}.`,
          });
        } else {
          res.status(500).send({
            message:
              "Erreur lors de la récupération de l'avatar avec l'id " +
              req.query.idAvatar,
          });
        }
      } else res.send(data);
    });
  }
};

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Le contenu ne peut pas être vide!",
    });
  }

  avatar.updateById(req.params.id, req.body, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Avatar introuvable avec l'id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Erreur lors de la modification de l'avatar avec l'id " +
            req.params.id,
        });
      }
    } else res.send(data);
  });
};

exports.delete = (req, res) => {
  avatar.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Avatar introuvable avec l'id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Impossible de supprimer l'avatar avec l'id " + req.params.id,
        });
      }
    } else res.send({ message: `Avatar supprimé avec succès!` });
  });
};

exports.deleteAll = (req, res) => {
  avatar.removeAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message ||
          "Une erreur s'est produite lors de la suppression des avatars.",
      });
    } else
      res.send({ message: `Tous les avatars ont été supprimés avec succès!` });
  });
};
