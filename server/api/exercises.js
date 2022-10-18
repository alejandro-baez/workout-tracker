const router = require("express").Router();
const { Exercise } = require("../db/index");

// /api/exercises
router.get("/", async (req, res, next) => {
  try {
    const allExercises = await Exercise.findAll();
    res.json(allExercises);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
