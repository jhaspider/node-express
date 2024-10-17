const router = require("express").Router();
router.get("/", (request, response) => {
  response.status(200).send({ msg: "Hello from user module" });
  return;
});

module.exports = router;
