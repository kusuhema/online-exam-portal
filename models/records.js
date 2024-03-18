const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentPerformanceSchema = new Schema({
    userid : {
        type : Schema.Types.ObjectId,
        ref : "User",
        required : true,
    },
    userId : {
        type : String,
        required : true
    },

    Exam : {
        type : String,
        required : true
    },
    Score : {
        type : Number,
        required : true
    },
    totalMarks : {
        type : Number,
        required : true,
    },
    passingMarks : {
        type : Number,
        required : true
    },
    created_at: {
        type : Date,
        default : Date.now(),
    },
    timeZone: {
        type: String,
        default: "UTC", // Default to UTC if not specified
    },
    vedrict : {
        type : String,
        required : true,
    },
    examid : {
        type : Schema.Types.ObjectId,
        ref : "Exam",
        required : true,
    }
});

module.exports = mongoose.model("StudentPerformance",StudentPerformanceSchema);