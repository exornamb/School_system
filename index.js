const Student = require("./student");
const Teacher = require("./teacher");

const express = require("express");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();
mongoose.set("strictQuery", false);


const monlib = mongoose.connect(process.env.URI).then(() => {console.log("Connected to database.")});
const app = express();
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}));
app.get("/", (req, res) => {
    res.send("server is working");

});

app.get("/student", async(req, res) => {
    await Student.find().then((students) => {res.json(students)}).catch((error) => {res.json({message: error})});
});

app.post("/student", async(req, res) => {
    console.log(req.body);
    await Student.create(req.body).then((student) => {res.json(student)}).catch((error) => {res.json({message: error})});
});

app.delete("/student/:id", async(req, res) => {
    await Student.findByIdAndDelete(req.params.id).then(() => {
        res.json({message: "Your account has been deleted."})}).catch((error) => {
        res.json({message: error})})
});


app.patch("/student/:id", async(req, res) => {
     await Student.findByIdAndUpdate( req.params.id, req.body, { new: true}).then((updatedStudent) => {
         res.json(updatedStudent)}).catch((error) => {
         res.json({message: error})})
 });


 //the teachers' request and response
 app.get("/teacher", async(req, res) => {
     await Teacher.find().then((teachers) => {res.json(teachers)}).catch((error) => {res.json({message: error})});
 });

 app.post("/teacher", async(req, res) => {
     console.log(req.body);
     await Teacher.create(req.body).then((teacher) => {res.json(teacher)}).catch((error) => {res.json({message: error})});
 });

 app.delete("/teacher/:id", async(req, res) => {
     await Teacher.findOneAndDelete(req.params.id).then(() => {
         res.json({message: "Your account has been deleted."})}).catch((error) => {
         res.json({message: error})})
    
 });


 app.patch("/teacher/:id", async(req, res) => {
    await Teacher.findByIdAndUpdate( req.params.id, req.body, { new: true}).then((updatedTeacher) => {
        res.json(updatedTeacher)}).catch((error) => {
        res.json({message: error})})
});
app.put("/teacher/:id", async(req, res) => {
    await Teacher.findByIdAndUpdate( req.params.id, req.body, { new: true}).then((updatedTeacher) => {
        res.json(updatedTeacher)}).catch((error) => {
        res.json({message: error})})
});

 app.listen(5000 , () => {console.log("listen on port http://localhost:5000.")});
