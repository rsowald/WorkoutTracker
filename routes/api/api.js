const router = require("express").Router();
const db = require("../../models");

router.get("/exercise", async (req, res) => {
    try {
        const exercise = await db.Exercise.find({});
        res.status(200).json(exercise);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get("/workouts", async (req, res) => {
    try {
        const workout = await db.Workout.find({}).populate("exercises")
        res.status(200).json(workout);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/workouts/range", async (req, res) => {
    try {
        const workoutRange = await db.Workout.find({}).populate("exercises").limit(7);
        res.status(200).json(workoutRange);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post("/workouts", ({ body }, res) => {
    try {
        const newWorkout = db.Workout.create(body);
        res.json(newWorkout);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put("/workouts", (req, res) => {
    try {
        const updatedWorkout = db.Workout.findOneAndUpdate((req.params.id), req.body);
        res.json(updatedWorkout);
    } catch (err) {
        res.status(400).json(err);
    }
})


module.exports = router;