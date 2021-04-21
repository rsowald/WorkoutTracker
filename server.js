const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const routes = require('./routes');

const PORT = process.env.PORT || 3000

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb+srv://renae-admin:TNgPNi8S7xVE8ut@cluster0.ue9k5.mongodb.net/workout?retryWrites=true&w=majority",
    // process.env.MONGODB_URI || "mongodb://localhost/workout", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    });

// routes
app.use(routes);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});