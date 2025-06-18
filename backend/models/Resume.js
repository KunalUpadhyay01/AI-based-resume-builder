const mongoose = require("mongoose");

const ResumeSchema = mongoose.Schema({
    name:{
        type: String,
        required:true,
    }
})

module.exports = mongoose.model("Resume",ResumeSchema)