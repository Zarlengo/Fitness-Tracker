module.exports = (mongoose) => {
    const router = require("express").Router();
    const workoutRoutes = require("./workouts")(mongoose);

    // API routes: api/
    router.use("/workouts", workoutRoutes);

    return router;
}