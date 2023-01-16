const router = require("express").Router();
const avatar = require("./avatar");
const users = require("./users");
const avis = require("./avis");
const localisation = require("./localisation");
const attribut = require("./attribut");
const equipement = require("./equipement");
const favoris = require("./favoris");

router.use("/avatar", avatar);
router.use("/users", users);
router.use("/avis", avis);
router.use("/localisation", localisation);
router.use("/attribut", attribut);
router.use("/equipement", equipement);
router.use("/favoris", favoris);

module.exports = router;
