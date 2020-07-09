var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const guestsArray = [];
const waitList = [];

app.get("/", function (req, res) {
    res.send("Welcome to the MAK Hot Restaurant!");
});
app.get("/tables", function (req, res) {
    res.send("Current Reservations and Waiting List");
});
app.get("/reservation", function (req, res) {
    res.send("Make Your Reservation");
});
app.get("/api/tables", function (req, res) {
    res.send("");
});
app.get("/api/waitlist", function (req, res) {
    res.send("");
});

app.post("/api/guests", function (req, res) {
    var newGuest = req.body;
    console.log(newGuest);
    if (guestsArray.length < 5) {
        guestsArray.push(newGuest);
        res.json(newGuest);
    }else{
        waitList.push(newGuest);
        res.json(newGuest);
    }
    
});


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});