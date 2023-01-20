const router = require("express").Router();
const equipement = require("../../controllers/equipement");

router.get("/", equipement.find);

router.post("/", equipement.create);

router.put("/:id", equipement.update);

router.delete("/:id", equipement.delete);

router.delete("/", equipement.deleteAll);

module.exports = router;
