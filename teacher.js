const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teacher = new Schema({
    name: {type: String, required: true},
    age: {type: String, required: false},
    courseYouTeach: {type: String, required: true},
    levelOfEducation: {type: String, required: true}
});

const Teacher = mongoose.model("Teacher", teacher);

module.exports = Teacher;