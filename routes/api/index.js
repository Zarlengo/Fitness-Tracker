const router = require("express").Router();
const workoutRoutes = require("./workouts");

// API routes: api/
router.use("/workouts", workoutRoutes);

module.exports = router;
