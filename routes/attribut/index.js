const router = require("express").Router();
const attribut = require("../../controllers/attribut");

router.get("/", attribut.find);

router.post("/", attribut.create);

router.put("/:idL/:idE", attribut.update);

router.delete("/:idL/:idE", attribut.delete);

router.delete("/", attribut.deleteAll);

module.exports = router;
