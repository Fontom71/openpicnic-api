const user = require("../models/user");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Le contenu ne peut pas être vide!",
    });
  }

  user.create(req.body, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message ||
          "Une erreur s'est produite lors de la création de l'utilisateur.",
      });
    } else res.send(data);
  });
};

exports.findAll = (req, res) => {
  user.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message ||
          "Une erreur s'est produite lors de la récupération des utilisateurs.",
      });
    } else res.send(data);
  });
};

exports.findOne = (req, res) => {
  user.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Utilisateur introuvable avec l'id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Erreur lors de la récupération de l'utilisateur avec l'id " +
            req.params.id,
        });
      }
    } else res.send(data);
  });
};

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Le contenu ne peut pas être vide!",
    });
  }

  user.updateById(req.params.id, req.body, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Utilisateur introuvable avec l'id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Erreur lors de la mise à jour de l'utilisateur avec l'id " +
            req.params.id,
        });
      }
    } else res.send(data);
  });
};

exports.delete = (req, res) => {
  user.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Utilisateur introuvable avec l'id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Impossible de supprimer l'utilisateur avec l'id " + req.params.id,
        });
      }
    } else res.send({ message: `Utilisateur supprimé avec succès!` });
  });
};

exports.deleteAll = (req, res) => {
  user.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message ||
          "Une erreur s'est produite lors de la suppression de tous les utilisateurs.",
      });
    else
      res.send({
        message: `Tous les utilisateurs ont été supprimés avec succès!`,
      });
  });
};
