const EnrollmentRequest = require("./models/examenrollment.js");
const reviews = require("./models/contact.js")


module.exports.isLoggedin = (req,res,next)=>{
    if(!req.isAuthenticated()) {
        req.flash("error","please login to explore");
        return res.render("users/login.ejs")
    }
    next();
}

module.exports.checkEnrollment = async (req, res, next) => {
    try {
        const userId = req.user._id;
        const { examid } = req.params;

        const existingEnrollment = await EnrollmentRequest.findOne({ studentId: userId, examId: examid });
        if (existingEnrollment) {
            req.flash("error","you have already regestered for this exam");
            return res.redirect("/allExams")
        }
        next(); // Continue to the next middleware
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).send("Internal Server Error");
    }
};

