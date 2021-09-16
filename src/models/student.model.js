const mongoose = require("mongoose");


const studentSchema = new mongoose.Schema({
    roll_id: { type: Number, required: true },
    current_batch: { type: String, required: true },
    evaluation:{type:mongoose.Schema.Types.ObjectId,ref:"evaluation",required:true}
});

const student = mongoose.model("student", studentSchema);

module.exports = student;