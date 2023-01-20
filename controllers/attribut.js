const attribut = require("../models/attribut.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Le contenu ne peut pas être vide!",
    });
  }

  attribut.create(req.body, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message ||
          "Une erreur s'est produite lors de la création de l'attribut.",
      });
    } else res.send(data);
  });
};

exports.find = (req, res) => {
  if (!req.query.idL && !req.query.idE) {
    attribut.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message ||
            "Une erreur s'est produite lors de la récupération des attributs.",
        });
      else res.send(data);
    });
  } else {
    if (req.query.idL) {
      attribut.findByIdL(req.query.idL, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Attribut introuvable avec l'id ${req.query.idL}.`,
            });
          } else {
            res.status(500).send({
              message:
                "Erreur lors de la récupération de l'attribut avec l'id " +
                req.query.idL,
            });
          }
        } else res.send(data);
      });
    } else {
      attribut.findByIdE(req.query.idE, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Attribut introuvable avec l'id ${req.query.idE}.`,
            });
          } else {
            res.status(500).send({
              message:
                "Erreur lors de la récupération de l'attribut avec l'id " +
                req.query.idE,
            });
          }
        } else res.send(data);
      });
    }
  }
};

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Le contenu ne peut pas être vide!",
    });
  }

  attribut.updateById(req.params.idL, req.params.idE, req.body, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Equipement introuvable avec l'id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Erreur lors de la mise à jour de l'attribut avec l'id " +
            req.params.id,
        });
      }
    } else res.send(data);
  });
};

exports.delete = (req, res) => {
  attribut.remove(req.params.idL, req.params.idE, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Equipement introuvable avec l'id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Impossible de supprimer l'attribut avec l'id " + req.params.id,
        });
      }
    } else res.send({ message: `Equipement supprimé avec succès!` });
  });
};

exports.deleteAll = (req, res) => {
  attribut.removeAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message ||
          "Une erreur s'est produite lors de la suppression des attributs.",
      });
    } else
      res.send({
        message: `Tous les attributs ont été supprimés avec succès!`,
      });
  });
};
