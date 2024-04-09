const nodemailer = require('nodemailer');
const Exam = require("../../models/exam.js");
const Questions = require("../../models/questions.js");
const examEnrollment = require("../../models/examenrollment.js")
const mongoose = require("mongoose");
const user = require("../../models/users.js");
const contact = require("../../models/contact.js");

// // Create a nodemailer transporter
// const transporter = nodemailer.createTransport({
//     service: 'Gmail', // e.g., 'Gmail', 'Outlook'
//     auth: {
//         user: 'abbashussainah2239@gmail.com',
//         pass: 'Rangerog@000'
//     }
// });

// // Function to send email
// console.error("Error sending email: ", error);




module.exports.addExamDetails = async(req,res)=>{
    try {
        await res.render("admin/examdetails.ejs")
    } catch (error) {
        console.error("Error:", error);
        res.render("templates/internalerror.ejs")
    }
    
}

module.exports.exam = async(req,res)=>{
    try {
        const{examName,duration,category,totalMarks,passingMarks,end} =req.body;
        const newExam = new Exam ({
            examName : examName ,
            duration : duration,
            category: category,
            totalMarks:totalMarks,
            passingMarks:passingMarks,
            end_date : end
        })
        await newExam.save();
        req.flash("success","new exam was Created");
        await res.redirect("/showExamDetails")
    } catch (error) {
        console.error("Error:", error);
        res.render("templates/internalerror.ejs")
    }
};

module.exports.showExamDetails = async(req,res)=>{
    try {
        const examDetails = await Exam.find();
        res.render("admin/examSection.ejs",{examDetails})
    } catch (error) {
        console.error("Error:", error);
        res.render("templates/internalerror.ejs")
    }
    
};
 
module.exports.editbyId = async(req,res)=>{
    try {
        let {id} = req.params;
        const exam = await Exam.findById(id);
        res.render("admin/editExamDetails.ejs",{exam});
    } catch (error) {
        console.error("Error:", error);
        res.render("templates/internalerror.ejs")
    }
    
}

module.exports.saveEditedExam = async(req,res)=>{
    try {
        let {id} = req.params;
        await Exam.findByIdAndUpdate(id, {...req.body.exam});
        req.flash("success","exam details edited successful");
        res.redirect("/showExamDetails")
    } catch (error) {
        console.error("Error:", error);
        res.render("templates/internalerror.ejs")
    }
}

module.exports.deleteExam = async(req,res)=>{
    const {id} = req.params;
    try {
        await Exam.findByIdAndDelete(id);
        await examEnrollment.deleteMany({ examId: id });
        await Questions.deleteMany({exam : id })
        req.flash("success","Exam is deleted");
    } catch (error) {
        console.error("Error:", error);
        res.render("templates/internalerror.ejs")
    }
    res.redirect("/showExamDetails");
};

//adding questions for the database with examId

module.exports.addQuestions = async(req,res)=>{
    try {
        let {id} = req.params;
        const exam = await Exam.findById(id);
        await res.render("admin/examQuestion.ejs",{exam})
    } catch (error) {
        console.error("Error:", error);
        res.render("templates/internalerror.ejs")
    }
}

module.exports.addQuestToDb = async(req,res)=>{
    try {
        let {id} = req.params;
        const{question,options,correct} = req.body;
        const newQuestion = new Questions({
            question : question,
            options : options,
            correct : correct,
            exam : id
        });

        const ques =  await newQuestion.save();
        const exam = await Exam.findOne({_id : id});
        exam.questions.push(ques._id);
        await exam.save();
        req.flash("success","new Question is created");
        res.redirect(`/Questions/${id}`);
    } catch (error) {
        console.error("Error:", error);
        res.render("templates/internalerror.ejs")
    }
}

module.exports.ShowQuestionsByID = async(req,res)=>{
    try {
        let {id} = req.params;
        const exam = await Exam.findById(id).populate("questions");
        res.render("admin/displayQuestion.ejs",{exam})
    } catch (error) {
        console.error("Error:", error);
        res.render("templates/internalerror.ejs")
    }
    
}


//editQuestionsById
module.exports.editQuestionsById = async(req,res)=>{
    try {
        let {questionId,id} = req.params;
        const exam = await Exam.findById(id);
        const questions = await Questions.findById(questionId);
        await res.render("admin/editQuestion.ejs",{questions,exam});
    } catch (error) {
        console.error("Error:", error);
        res.render("templates/internalerror.ejs")
    }
    
}

module.exports.saveEditQuestions = async(req,res)=>{
    try {
        let {questionId,id} = req.params;
        await Questions.findByIdAndUpdate(questionId, req.body);
        req.flash("success","Question edited successful");
        res.redirect(`/Questions/${id}`);
    } catch (error) {
        console.error("Error:", error);
        res.render("templates/internalerror.ejs")
    }
    
}

module.exports.deleteQuestionFromExam = async(req,res)=>{
    try {
        let {id,questionId} = req.params;

        await Exam.findByIdAndUpdate(id , {$pull : {questions : questionId}})
        await Questions.findOneAndDelete({_id : questionId});

        res.redirect(`/Questions/${id}`);
    } catch (error) {
        console.error("Error:", error);
        res.render("templates/internalerror.ejs")
    }
}

module.exports.approveexam = async(req,res)=>{
    try {
        const approveExam = await Exam.find();
        res.render("admin/enrollRequest.ejs",{approveExam})
    } catch (error) {
        console.error("Error:", error);
        res.render("templates/internalerror.ejs")
    }
    
}

module.exports.studentRequests = async(req,res)=>{
    try {
        const {id} = req.params
        const exam = await Exam.findById(id).populate("enrolled");
        res.render("admin/studentRequest.ejs",{exam})
    } catch (error) {
        console.error("Error:", error);
        res.render("templates/internalerror.ejs")
    }
    
}



exports.approveEnrollment = async (req, res) => {
    try {
        const { id } = req.params;
        const enrollStudent = await examEnrollment.findById(id);
        const studentid = enrollStudent.studentId;
        const curr = await user.findById(studentid);
        const userEmail = curr.email;
        let list = await examEnrollment.findByIdAndUpdate(id, { status: 'approved' });
        //sending mail 
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD
            }
        });

        // Send email
        const info = await transporter.sendMail({
            from: process.env.MAIL_USER,
            to: userEmail,
            subject: 'Your enrollment has been approved',
            text: 'Your enrollment for the exam has been approved.'
        });

        // console.log("Email sent: ", info.response);
        res.redirect(`/approveExam/${list.examId}/student`);
    } catch (error) {
        console.error("Error:", error);
        console.error("Error sending email: ", error);
        res.render("templates/internalerror.ejs")
    }
};

exports.rejectEnrollment = async (req, res) => {
    try {
        const { id } = req.params;
        const enrollStudent = await examEnrollment.findById(id);
        const studentid = enrollStudent.studentId;
        const curr = await user.findById(studentid);
        const emailid = curr.email;

       let list = await examEnrollment.findByIdAndUpdate(id, { status: 'rejected' });
       const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD
        }
    });

    // Send email
    const info = await transporter.sendMail({
        from: process.env.MAIL_USER,
        to: emailid,
        subject: 'Your enrollment has been rejected',
        text: 'Your enrollment for the exam has been rejected.'
    });

    // console.log("Email sent: ", info.response);

        res.redirect(`/approveExam/${list.examId}/student`);
    } catch (error) {
        console.error("Error:", error);
        res.render("templates/internalerror.ejs")
    }
};

module.exports.contact = async(req,res)=>{
    try {
        const {Name,Email,Subject,Message} = req.body;
        const newcontact = new contact ({
            username : Name,
            email : Email,
            subject : Subject,
            message : Message
        });
    
        await newcontact.save();
        req.flash("success","feedback sent successfully");
        return res.redirect("/contactus")
    } catch (error) {
        console.error("Error:", error);
        res.render("templates/internalerror.ejs")
    }
}

module.exports.feedback = async (req,res)=>{
    try {
        const feedback = await contact.find();
        await res.render("templates/feedback.ejs",{feedback})
    } catch (error) {
        console.error("Error:", error);
        res.render("templates/internalerror.ejs")
    }
}

module.exports.delfeed = async(req,res)=>{
    const {id} = req.params;
    try {
        await contact.findByIdAndDelete(id)
        req.flash("success","feedback deleted successfully");
        res.redirect("/feedback")
    } catch (error) {
        console.error("Error:", error);
        res.render("templates/internalerror.ejs")
    }
}

module.exports.showuser = async(req,res)=>{
    const userdata = await user.find();
    res.render("admin/userdata.ejs",{userdata})
};

module.exports.deluser = async(req,res)=>{
    const {id} = req.params;
    await user.findByIdAndDelete(id);
    res.redirect("/userdata")
}
