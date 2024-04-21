const express = require("express");
const router = express.Router();

//user authentication
const passport = require("passport");
const {isLoggedin,checkEnrollment} = require("../middleware.js");
const {registrationUser,signupuser,login, loginuser,logout,home,about,contactus,} = require("../controllers/user/userreg.js");
const {addExamDetails,exam,showExamDetails,deleteExam,editbyId,saveEditedExam,showuser,deluser} = require("../controllers/admin/examcon.js");
const {addQuestions,addQuestToDb,ShowQuestionsByID,editQuestionsById,saveEditQuestions,
        deleteQuestionFromExam,approveexam,studentRequests,approveEnrollment,rejectEnrollment,contact,feedback,delfeed} = require("../controllers/admin/examcon.js");
const {examInstructions,getQuestionFromExamID,submitAns,records,showExams,dashboard,filterRecords,requestEnrollment,reviews,delRevview} = require("../controllers/Student/examQues.js");
const {praexam,praticeTest,pythonPraticeTest,javaPraticeTest,cPraticeTest,ccPraticeTest}= require("../controllers/pratice/pratice.js")

// user login and signup routes
 


router.get("/login",login);

router.post("/login",passport.authenticate('local', { failureRedirect: '/login' , failureFlash : true  }),loginuser);

router.get("/signup", registrationUser);

router.post("/signup", signupuser);

router.get("/logout",logout);

router.get("/home",home);

router.get("/about",about);

router.post("/review/:id",reviews);

router.delete("/review/:id/delete",delRevview);

router.get("/contactus",contactus)

//admin page routes 
//create
router.get("/addExamDetails",addExamDetails);

router.post("/exam",exam);

//retrive
router.get("/showExamDetails",showExamDetails);

//edit or update
router.get("/editform/:id/edit",editbyId);

router.put("/editform/:id",saveEditedExam)

//delete adminexam route
router.delete("/Exam/:id",deleteExam);

// contactus
router.post("/contactus",contact);

//feedback
router.get("/feedback",feedback);

router.delete("/del/:id",delfeed);

//admin userdata

router.get("/userdata",showuser);

router.delete("/userdata/:id",deluser)

//admin examQuestions routes
router.get("/addQuestion/:id/add",addQuestions);

router.post("/addQuestions/:id",addQuestToDb);

//show questions
router.get("/Questions/:id",ShowQuestionsByID);

//edit route for questions
router.get("/editQuestion/:id/edit/:questionId",editQuestionsById);

router.put("/editQuestion/:id/edit/:questionId",saveEditQuestions);

//delete route for question
router.delete("/Exam/:id/delete/:questionId",deleteQuestionFromExam);

//student exam routes
//student enroll request

router.post('/request/:userid/exam/:examid',checkEnrollment,requestEnrollment);

//admin approve exam request

router.get("/approveExam",isLoggedin,approveexam);

router.get("/approveExam/:id/student",studentRequests);

router.post("/enrollment-requests/:id/approve",approveEnrollment)

router.post("/enrollment-requests/:id/reject",rejectEnrollment)

//update status

//instructions route
router.get("/StudentExam/:id/instructions",isLoggedin,examInstructions);

router.get("/StudentExam/:id/exam",getQuestionFromExamID);

router.post("/StudentExam/:id/exam",submitAns);

//student record routes
router.get("/student/record",isLoggedin,records);

router.post('/filter-records', filterRecords);

//showing exams 
router.get("/allExams",isLoggedin,showExams);

//student dastboard
router.get("/dashboard/:id",isLoggedin,dashboard);

// pratice test
router.get("/praexam",isLoggedin,praexam)

router.get("/praticetest",praticeTest);

router.get("/pythonPraticeTest",pythonPraticeTest);

router.get("/javaPraticeTest",javaPraticeTest);

router.get("/cPraticeTest",cPraticeTest);

router.get("/ccPraticeTest",ccPraticeTest);

module.exports = router
