const router = require("express").Router();
const Workout = require("../../models/workout");

// Route to create a new exercise
router.post("/", async ({ body }, res) => {
  try {
    const newWorkout = await Workout.create(body);
    res.status(200).json(newWorkout);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route to get workout and exercise math for duration
router.get("/", async (req, res) => {
  try {
    const workouts = await Workout.aggregate([
      {
        $addFields: { totalDuration: { $sum: "$exercises.duration" } },
      },
    ]);
    res.status(200).json(workouts);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
