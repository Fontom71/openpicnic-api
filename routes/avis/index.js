const router = require("express").Router();
const avis = require("../../controllers/avis");

router.get("/", avis.findAll);

router.get("/:idU/:idL", avis.findOne);

router.post("/", avis.create);

router.put("/:idU/:idL", avis.update);

router.delete("/:idU/:idL", avis.delete);

router.delete("/", avis.deleteAll);

module.exports = router;
