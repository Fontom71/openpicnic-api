const favoris = require("../models/favoris.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Le contenu ne peut pas être vide!",
    });
  }

  favoris.create(req.body, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message ||
          "Une erreur s'est produite lors de la création du favoris.",
      });
    } else res.send(data);
  });
};

exports.findAll = (req, res) => {
  favoris.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message ||
          "Une erreur s'est produite lors de la récupération des favoris.",
      });
    } else res.send(data);
  });
};

exports.findOne = (req, res) => {
  favoris.findById(req.params.idU, req.params.idL, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Favoris introuvable avec l'id ${req.params.idU}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Erreur lors de la récupération du favoris avec l'id " +
            req.params.idU,
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

  favoris.updateById(req.params.idU, req.params.idL, req.body, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Favoris introuvable avec l'id ${req.params.idU}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Erreur lors de la mise à jour du favoris avec l'id " +
            req.params.idU,
        });
      }
    } else res.send(data);
  });
};

exports.delete = (req, res) => {
  favoris.remove(req.params.idU, req.params.idL, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Favoris introuvable avec l'id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Erreur lors de la suppression du favoris avec l'id " +
            req.params.id,
        });
      }
    } else res.send({ message: `Favoris supprimé avec succès!` });
  });
};

exports.deleteAll = (req, res) => {
  favoris.removeAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message ||
          "Une erreur s'est produite lors de la suppression des favoris.",
      });
    } else
      res.send({ message: `Tous les favoris ont été supprimés avec succès!` });
  });
};
