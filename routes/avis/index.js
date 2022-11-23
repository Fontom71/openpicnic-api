const router = require("express").Router();
const avis = require("../../controllers/avis");

router.get("/", avis.findAll);

router.get("/:id", avis.findOne);

router.post("/", avis.create);

router.put("/:id", avis.update);

router.delete("/:id", avis.delete);

router.delete("/", avis.deleteAll);

module.exports = router;
