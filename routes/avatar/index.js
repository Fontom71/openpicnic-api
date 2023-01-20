const router = require("express").Router();
const avatar = require("../../controllers/avatar");

router.get("/", avatar.find);

router.post("/", avatar.create);

router.put("/:id", avatar.update);

router.delete("/:id", avatar.delete);

router.delete("/", avatar.deleteAll);

module.exports = router;
