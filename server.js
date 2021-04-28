var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [
    {
    name: "Carlos",
    phone: "8939302910",
    email: "anothermail@gmail.com",
    id: "Carrr105"
    }
]

var waiting = [
    {
    name: "Emilio",
    phone: "8920190192",
    email: "emilio@gmail.com",
    id: "emi99"
    }
]


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.post("/api/tables", function(req, res){
    var newreservation = req.body;

    console.log(newreservation);
    if (tables.length<5){
        tables.push(newreservation);
        res.json(newreservation);
    }
    else{
        waiting.push(newreservation);
        newreservation = "";
        res.json(newreservation);
    }

})

app.get("/api/tables", function(req, res) {
    res.send(tables);
});

app.post("/api/clear", function(req,res){
    tables = [];
    waiting = [];
    res.send("");
});

app.get("/api/waitlist", function(req, res) {
    res.send(waiting);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});