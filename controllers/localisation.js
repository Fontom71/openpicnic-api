const localisation = require("../models/localisation.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Le contenu ne peut pas être vide!",
    });
  }

  localisation.create(req.body, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message ||
          "Une erreur s'est produite lors de la création de la localisation.",
      });
    } else res.send(data);
  });
};

exports.find = (req, res) => {
  if (!req.query.id && !req.query.nom) {
    localisation.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message ||
            "Une erreur s'est produite lors de la récupération des localisations.",
        });
      else res.send(data);
    });
  } else {
    if (req.query.nom) {
      localisation.findByNom(req.query.nom, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Localisation introuvable avec le nom ${req.query.nom}.`,
            });
          } else {
            res.status(500).send({
              message:
                "Erreur lors de la récupération de la localisation avec le nom " +
                req.query.nom,
            });
          }
        } else res.send(data);
      });
    } else {
      localisation.findById(req.query.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Localisation introuvable avec l'id ${req.query.id}.`,
            });
          } else {
            res.status(500).send({
              message:
                "Erreur lors de la récupération de la localisation avec l'id " +
                req.query.id,
            });
          }
        } else res.send(data);
      });
    }
  }
};

exports.findOne = (req, res) => {
  localisation.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Localisation introuvable avec l'id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Erreur lors de la récupération de la localisation avec l'id " +
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

  localisation.updateById(req.params.id, req.body, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Localisation introuvable avec l'id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Erreur lors de la mise à jour de la localisation avec l'id " +
            req.params.id,
        });
      }
    } else res.send(data);
  });
};

exports.delete = (req, res) => {
  localisation.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Localisation introuvable avec l'id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Impossible de supprimer la localisation avec l'id " +
            req.params.id,
        });
      }
    } else res.send({ message: `Localisation supprimée avec succès!` });
  });
};

exports.deleteAll = (req, res) => {
  localisation.removeAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message ||
          "Une erreur s'est produite lors de la suppression de toutes les localisations.",
      });
    } else
      res.send({
        message: `Toutes les localisations ont été supprimées avec succès!`,
      });
  });
};
