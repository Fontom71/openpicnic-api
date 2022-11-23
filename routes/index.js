const router = require("express").Router();
const avatar = require("./avatar");
const users = require("./users");
const avis = require("./avis");
const localisation = require("./localisation");
const equipement = require("./equipement");
const equipements = require("./equipements");

router.use("/avatar", avatar);
router.use("/users", users);
router.use("/avis", avis);
router.use("/localisation", localisation);
router.use("/equipement", equipement);
router.use("/equipements", equipements);

module.exports = router;
