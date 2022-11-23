const router = require("express").Router();
const avatar = require("../../controllers/avatar");

router.get("/", avatar.findAll);

router.get("/:id", avatar.findOne);

router.post("/", avatar.create);

router.put("/:id", avatar.update);

router.delete("/:id", avatar.delete);

router.delete("/", avatar.deleteAll);

module.exports = router;
