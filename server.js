var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const guestsArray = [];
const waitList = [];

app.get("/", function (req, res) {
    // res.send("Welcome to the MAK Hot Restaurant!");
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/tables", function (req, res) {
    // res.send("Current Reservations and Waiting List");
    res.sendFile(path.join(__dirname, "tables.html"));
});
app.get("/reservation", function (req, res) {
    // res.send("Make Your Reservation");
    res.sendFile(path.join(__dirname, "reservation.html"));
});
app.get("/api/tables", function (req, res) {
    // res.send("this is where we'll get our table info");
    res.json(guestsArray);
});
app.get("/api/waitlist", function (req, res) {
    // res.send("this will have our waitlist info");
    res.json(waitList);
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