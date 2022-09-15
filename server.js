const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

mongoose.connect("mongodb+srv://MaheepKumar:wxmc1t5224@cluster0.blfddje.mongodb.net/test", {useNewUrlParser: true}, {useUnifiedTopology: true})

const notesSchema = {
    person: String,
    studentNumber: String,
    mail: String,
    branch: String,
    section: String,
    phone: String,
    usp: String

}
const Note =  mongoose.model("Note", notesSchema);

app.get("/", function(req, res){
   res.sendFile(__dirname + "/index.html");
})


app.post("/", function(req, res){
    let newNote =  new Note({
        person: req.body.person,
        studentNumber: req.body.studentNumber,
        mail: req.body.mail,
        branch: req.body.branch,
        section: req.body.section,
        phone: req.body.phone,
        usp: req.body.usp
    });
    newNote.save();
    res.redirect("/");
 })



app.listen(3000, function(){
    console.log("Server is running at 3000");
})