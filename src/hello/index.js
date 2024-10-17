const router = require("express").Router();
router.get("/", (request, response) => {
  response.status(200).send({ msg: "Hello from EC2 on AWS." });
  return;
});

module.exports = router;
