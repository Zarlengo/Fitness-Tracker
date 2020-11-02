const router = require("express").Router();
const Workout = require("../../models/Workout.js");

// API Routes: /api/workout

router.post("/", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/", (_, res) => {
  Workout.find({})
    .sort({ day: 1 })
    .then(dbWorkout => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/:id", ({ body, params }, res) => {
  Workout.update(
    {
      _id: params.id
    },
    {
      $push: {
        exercises: body
      },
      $inc: {
        totalDuration: body.duration
      }
    },

    (error, edited) => {
      if (error) {
        console.log(error);
        res.send(error);
      } else {
        console.log(edited);
        res.send(edited);
      }
    }
  );
});

router.get("/range", (_, res) => {
  let lowerRange = new Date();
  lowerRange.setDate(lowerRange.getDate() - 7);

  Workout.find({})
    .where("day").gte(lowerRange)
    .then(dbWorkout => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
