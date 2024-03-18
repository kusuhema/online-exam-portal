const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const questionSchema = new Schema({
    question : {
        type : String,
        required : true,
    },
    options : [
        {
            type : String,
            required : true,
        }
    ],
    correct : {
        type : Number,
        required : true,
    },
    exam: {
        type: Schema.Types.ObjectId,
        ref: "Exam",
        required: true
    },
});


module.exports = mongoose.model("Questions",questionSchema);
