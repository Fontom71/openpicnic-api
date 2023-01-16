const router = require("express").Router();
const favoris = require("../../controllers/favoris");

router.get("/", favoris.findAll);

router.get("/:idU/:idL", favoris.findOne);

router.post("/", favoris.create);

router.put("/:idU/:idL", favoris.update);

router.delete("/:idU/:idL", favoris.delete);

router.delete("/", favoris.deleteAll);

module.exports = router;
