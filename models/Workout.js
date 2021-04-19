const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    totalDuration: {
        type: Number
    },
    numExercises: {
        type: Number
    },
    totalWeight: {
        type: Number
    },
    totalSets: {
        type: Number
    },
    totalReps: {
        type: Number
    },
    totalDistance: {
        type: Number
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: "Exercise"
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;