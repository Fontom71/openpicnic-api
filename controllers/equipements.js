const equipements = require("../models/equipements.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Le contenu ne peut pas être vide!",
    });
  }

  equipements.create(req.body, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message ||
          "Une erreur s'est produite lors de la création de l'équipement.",
      });
    } else res.send(data);
  });
};

exports.findAll = (req, res) => {
  equipements.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message ||
          "Une erreur s'est produite lors de la récupération des équipements.",
      });
    } else res.send(data);
  });
};

exports.findOne = (req, res) => {
  equipements.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Equipement introuvable avec l'id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Erreur lors de la récupération de l'équipement avec l'id " +
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

  equipements.updateById(req.params.id, req.body, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Equipement introuvable avec l'id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Erreur lors de la mise à jour de l'équipement avec l'id " +
            req.params.id,
        });
      }
    } else res.send(data);
  });
};

exports.delete = (req, res) => {
  equipements.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Equipement introuvable avec l'id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Impossible de supprimer l'équipement avec l'id " + req.params.id,
        });
      }
    } else res.send({ message: `Equipement supprimé avec succès!` });
  });
};

exports.deleteAll = (req, res) => {
  equipements.removeAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message ||
          "Une erreur s'est produite lors de la suppression des équipements.",
      });
    } else
      res.send({
        message: `Tous les équipements ont été supprimés avec succès!`,
      });
  });
};
