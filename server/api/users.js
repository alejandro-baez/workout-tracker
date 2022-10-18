const router = require("express").Router();

router.get("/", (req, res, next) => {
  try {
    res.send("Currently in users");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
