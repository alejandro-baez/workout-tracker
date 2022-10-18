const router = require("express").Router();

router.get("/", (req, res, next) => {
  try {
    res.send("Currently in exercises")
  } catch (err) {
    next(err);
  }
});

module.exports = router;
