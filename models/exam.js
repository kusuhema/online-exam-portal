const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const adminExamSchema = new Schema({
    examName : {
        type : String,
        required : true,
    },
    duration : {
        type : Number,
        required : true,
    },
    category : {
        type : String,
        required : true,
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
    questions: [
        {
           type: Schema.Types.ObjectId, 
            required: true,
            ref: "Questions"   
        }
    ],
    enrolled : [
        {
            type : Schema.Types.ObjectId,
            ref : "EnrollmentRequest",
            required : true
        }
    ]
})

module.exports = mongoose.model("Exam",adminExamSchema)