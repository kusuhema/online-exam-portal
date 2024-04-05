const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviews = new Schema ({
    username : {
        type : String,
        required :true
    },
     rating : {
        type : Number,
        min : 1,
        max : 5,
    },
    review : {
        type : String, 
        required :true
    },
    user : {
        type : Schema.Types.ObjectId,
        ref : "User" 
    },
});

const studentReview = mongoose.model("studentReview",reviews);

module.exports = studentReview