const router = require("express").Router();
const user = require("../../controllers/user");

router.get("/", user.findAll);

router.get("/:id", user.findOne);

router.post("/", user.create);

router.put("/:id", user.update);

router.delete("/:id", user.delete);

router.delete("/", user.deleteAll);

module.exports = router;
