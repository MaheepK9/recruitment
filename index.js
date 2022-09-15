
var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect("mongodb+srv://MaheepKumar:wxmc1t5224@cluster0.blfddje.mongodb.net/test", {useNewUrlParser: true}, {useUnifiedTopology: true})

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

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

//  db.collection('users').insertOne(data,(err,collection)=>{
//     if(err){
//         throw err;
//     }
//     console.log("Record Inserted Successfully");
// });

app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
}).listen(3000);





    console.log("Server is running at 3000");
