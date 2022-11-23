const router = require("express").Router();
const equipements = require("../../controllers/equipements");

router.get("/", equipements.findAll);

router.get("/:id", equipements.findOne);

router.post("/", equipements.create);

router.put("/:id", equipements.update);

router.delete("/:id", equipements.delete);

router.delete("/", equipements.deleteAll);

module.exports = router;
