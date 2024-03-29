const router = require("express").Router();
const localisation = require("../../controllers/localisation");

router.get("/", localisation.find);

router.post("/", localisation.create);

router.put("/:id", localisation.update);

router.delete("/:id", localisation.delete);

router.delete("/", localisation.deleteAll);

module.exports = router;
