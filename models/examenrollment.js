const mongoose = require("mongoose");
const Schema = mongoose.Schema

const enrollmentRequestSchema = new Schema({
    studentId: { 
        type: Schema.Types.ObjectId,
        ref: 'User',
        required : true
    },
    examId: { 
        type: Schema.Types.ObjectId, 
        ref: 'Exam',
        required : true
    },
    examname :{
        type : String,
        required : true
    },
    student : {
        type : String,
        required : true
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'], 
        default: 'pending' 
    },      
});

const EnrollmentRequest = mongoose.model('EnrollmentRequest', enrollmentRequestSchema);

module.exports = EnrollmentRequest;
