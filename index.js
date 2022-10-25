const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

const coursesCollection = require("./Data/courses.json");

app.get("/", (req, res) => {
    res.send(coursesCollection);
});
app.get("/allcourses", (req, res) => {
    res.send(coursesCollection)
});



app.listen(Port, () => {
    console.log('server is running on', Port)
})

module.exports = app;