const mongoose = require("mongoose");
const evaluationSchema = new mongoose.Schema({
    date_of_evaluation: { type: Date, required: true },
    instructor: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    topic_name: { type: mongoose.Schema.Types.ObjectId, ref:"topic", required: true }
});

const evaluation = mongoose.model("evaluation", evaluationSchema);

module.exports = evaluation;