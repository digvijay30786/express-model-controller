const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    gender: { type: String, required: false, default: "M" },
    dob: { type: String, required: true }   
},
    {
      versionKey: false,
      timestamps:true
    }
);

const user = mongoose.model("user", userSchema);

module.exports = user;