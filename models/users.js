const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema ({
    email : {
        type : String,
        required : true
    },
    regnumber : {
        type : String,
        required : true
    },
    records : [
        {
          type: Schema.Types.ObjectId,
          ref: "StudentPerformance",
          required: true
        }
    ],
    enrolled : [
        {
            type : Schema.Types.ObjectId,
            ref : "EnrollmentRequest",
            required : true
        }
    ],
});

userSchema.plugin(passportLocalMongoose);


module.exports = mongoose.model('User', userSchema);
