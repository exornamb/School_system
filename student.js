const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const student = new Schema({

    name: {type: String, required: true},
    studentId: {type: String, required: true},
    hall: {type: String, required: false},
    programme: {type: String, required: true}

});

const Student = mongoose.model("Student", student);

module.exports = Student;