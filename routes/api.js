const router = require("express").Router();
const db = require("./models");

router.post("/workouts", ({ body }, res) => {
    try {
        const newWorkout = db.Workout.create(body);
        res.json(newWorkout);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put("/workouts", ({ body }, res) => {
    try {
        const updatedWorkout = db.Workout.update(body);
        res.json(updatedWorkout);
    } catch (err) {
        res.status(400).json(err);
    }
})


module.exports = router;