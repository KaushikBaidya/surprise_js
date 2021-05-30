const express = require ("express");
const app = express();
const mongoose = require("body-parser");
const bodyParser = require("body-parser");

app.use(bodyParse.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://dbUser:F*6ucZhkx3YwU7b@cluster0.obba8.mongodb.net/infoDB", {useNewUrlParser: true}, {useUnifiedTopology: true})

const infoSchema = {
    name: string
}

const info = mongoose.model("Info", infoSchema);

app.get("/", function(req, res){
    res.sendFile(__dirname + "index.html");
})

app.post("/OI.html", function(req, res){
    let newInfo = new info({

    })
})

app.listen(3000, function(){
    console.log("server is running");
})