const router = require('express').Router();
var path = require('path');

router.get("/", async (req, res) => {
    try {
        res.sendFile(path.join(__dirname + '/index.html'));
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/exercise", async (req, res) => {
    try {
        res.sendFile(path.join(__dirname + '/exercise.html'));
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router