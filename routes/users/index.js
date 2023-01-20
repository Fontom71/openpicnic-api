const router = require("express").Router();
const user = require("../../controllers/user");

router.get("/", user.find);

router.post("/", user.create);

router.put("/:id", user.update);

router.delete("/:id", user.delete);

router.delete("/", user.deleteAll);

module.exports = router;
