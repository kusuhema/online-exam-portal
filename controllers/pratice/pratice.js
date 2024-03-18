const Exam = require("../../models/exam.js");
const Questions = require("../../models/questions.js");
const mongoose = require("mongoose");

module.exports.praexam = async(req,res)=>{
    await res.render("pratice/praexam.ejs");
}

//js pratice test
module.exports.praticeTest = async(req,res)=>{
    await res.render("pratice/javascript.ejs");
}

//python
module.exports.pythonPraticeTest = async(req,res)=>{
    await res.render("pratice/python.ejs");
}

//java
module.exports.javaPraticeTest = async(req,res)=>{
    await res.render("pratice/java.ejs");
}

//c 
module.exports.cPraticeTest = async(req,res)=>{
    await res.render("pratice/c.ejs");
}

//c++

module.exports.ccPraticeTest = async(req,res)=>{
    await res.render("pratice/cc.ejs");
}