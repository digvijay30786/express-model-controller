const mongoose = require("mongoose");

const markSchema = new mongoose.Schema({
    mark: { type: Number, required: true },
    instructor: { type: mongoose.Schema.Types.ObjectId, ref:"evaluation", required: true },
    student: { type: mongoose.Schema.Types.ObjectId, ref:"student" ,required: true }
})


const mark = mongoose.model('mark', markSchema);

module.exports = mark;