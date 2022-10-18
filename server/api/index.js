const router = require("express").Router();

//connecting routes here
router.use("/users", require("./users"));

router.use("/exercises", require("./exercises"));

//creating 404 error middleware
router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
