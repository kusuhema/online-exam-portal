const Exam = require("../../models/exam.js");
const Questions = require("../../models/questions.js");
const examEnrollment = require("../../models/examenrollment.js")
const mongoose = require("mongoose");
const user = require("../../models/users.js");




module.exports.addExamDetails = async(req,res)=>{
    try {
        await res.render("admin/examdetails.ejs")
    } catch (error) {
        console.error("Error : ",error);
        return res.status(500).send("Internal Server Error")
    }
    
}

module.exports.exam = async(req,res)=>{
    try {
        const{examName,duration,category,totalMarks,passingMarks} =req.body;
        const newExam = new Exam ({
            examName : examName ,
            duration : duration,
            category: category,
            totalMarks:totalMarks,
            passingMarks:passingMarks,
        })
        await newExam.save()
        await res.redirect("/showExamDetails")
    } catch (error) {
        console.error("Error : ",error);
        return res.status(500).send("Internal Server Error")
    }
};

module.exports.showExamDetails = async(req,res)=>{
    try {
        const examDetails = await Exam.find();
        res.render("admin/examSection.ejs",{examDetails})
    } catch (error) {
        console.error("Error : ",error);
        return res.status(500).send("Internal Server Error")
    }
    
};
 
module.exports.editbyId = async(req,res)=>{
    try {
        let {id} = req.params;
        const exam = await Exam.findById(id);
        res.render("admin/editExamDetails.ejs",{exam});
    } catch (error) {
        console.error("Error : ",error);
        return res.status(500).send("Internal Server Error")
    }
    
}

module.exports.saveEditedExam = async(req,res)=>{
    try {
        let {id} = req.params;
        await Exam.findByIdAndUpdate(id, {...req.body.exam});
        res.redirect("/showExamDetails")
    } catch (error) {
        console.error("Error : ",error);
        return res.status(500).send("Internal Server Error")
    }
}

module.exports.deleteExam = async(req,res)=>{
    const {id} = req.params;
    try {
        await Exam.findByIdAndDelete(id);
        await examEnrollment.deleteMany({ examId: id });


    } catch (error) {
        console.error("Error deleting exam:", error);
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
        console.error("Error : ",error);
        return res.status(500).send("Internal Server Error")
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

        res.redirect(`/Questions/${id}`);
    } catch (error) {
        console.error("Error : ",error);
        return res.status(500).send("Internal Server Error")
    }
}

module.exports.ShowQuestionsByID = async(req,res)=>{
    try {
        let {id} = req.params;
        const exam = await Exam.findById(id).populate("questions");
        res.render("admin/displayQuestion.ejs",{exam})
    } catch (error) {
        console.error("Error : ",error);
        return res.status(500).send("Internal Server Error")
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
        console.error("Error : ",error);
        return res.status(500).send("Internal Server Error")
    }
    
}

module.exports.saveEditQuestions = async(req,res)=>{
    try {
        let {questionId,id} = req.params;
        await Questions.findByIdAndUpdate(questionId, req.body);
        res.redirect(`/Questions/${id}`);
    } catch (error) {
        console.error("Error : ",error);
        return res.status(500).send("Internal Server Error")
    }
    
}

module.exports.deleteQuestionFromExam = async(req,res)=>{
    try {
        let {id,questionId} = req.params;

        await Exam.findByIdAndUpdate(id , {$pull : {questions : questionId}})
        await Questions.findOneAndDelete({_id : questionId});

        res.redirect(`/Questions/${id}`);
    } catch (error) {
        console.error("Error : ",error);
        return res.status(500).send("Internal Server Error")
    }
}

module.exports.approveexam = async(req,res)=>{
    const approveExam = await Exam.find();
    res.render("admin/enrollRequest.ejs",{approveExam})
}

module.exports.studentRequests = async(req,res)=>{
    const {id} = req.params
    const exam = await Exam.findById(id).populate("enrolled")
    res.render("admin/studentRequest.ejs",{exam})
}

module.exports.studentaccept = async(req,res)=>{
    try {
        const {id,studentid} = req.params;
        const enrollment = await examEnrollment.findOne({_id : id},{studentId : studentid});
        res.render("admin/acceptStudentRequest.ejs",enrollment)
    } catch (error) {
        console.error("Error : ",error);
        return res.status(500).send("Internal Server Error")
    }
}

exports.approveEnrollment = async (req, res) => {
    try {
        const { id } = req.params;
        await examEnrollment.findByIdAndUpdate(id, { status: 'approved' });
        return res.redirect(`/approveExam/${id}/student`);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
};

exports.rejectEnrollment = async (req, res) => {
    try {
        const { id } = req.params;
        await examEnrollment.findByIdAndUpdate(id, { status: 'rejected' });
        res.redirect(`/approveExam/${id}/student`);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
};