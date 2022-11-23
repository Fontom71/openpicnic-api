const avis = require("../models/avis.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Le contenu ne peut pas être vide!",
    });
  }

  avis.create(req.body, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message ||
          "Une erreur s'est produite lors de la création de l'avis.",
      });
    } else res.send(data);
  });
};

exports.findAll = (req, res) => {
  avis.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message ||
          "Une erreur s'est produite lors de la récupération des avis.",
      });
    } else res.send(data);
  });
};

exports.findOne = (req, res) => {
  avis.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Avis introuvable avec l'id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Erreur lors de la récupération de l'avis avec l'id " +
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

  avis.updateById(req.params.id, req.body, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Avis introuvable avec l'id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Erreur lors de la mise à jour de l'avis avec l'id " +
            req.params.id,
        });
      }
    } else res.send(data);
  });
};

exports.delete = (req, res) => {
  avis.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Avis introuvable avec l'id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Impossible de supprimer l'avis avec l'id " + req.params.id,
        });
      }
    } else res.send({ message: `Avis supprimé avec succès!` });
  });
};

exports.deleteAll = (req, res) => {
  avis.removeAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message ||
          "Une erreur s'est produite lors de la suppression des avis.",
      });
    } else
      res.send({ message: `Tous les avis ont été supprimés avec succès!` });
  });
};
