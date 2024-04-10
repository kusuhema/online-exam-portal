const User = require("../../models/users.js");
const reviews = require("../../models/reviews.js")


module.exports.registrationUser = (req,res)=>{
    try {
        res.render("users/signup.ejs")
    } catch (error) {
        console.error("Error:", error);
        res.render("templates/internalerror.ejs")
    }
};

module.exports.signupuser = async (req,res)=>{
    try{
        let {username , email ,password } = req.body;
        const newUser =new User({email,username});
        const regesteredUser = await User.register(newUser , password);
        
        req.flash("success","your are registration is successful");
        res.redirect("/login")
    }catch(e) {
        req.flash("error",e.message);
        res.redirect("/signup");
    }
}

module.exports.login = (req,res)=>{
    try {
        res.render("users/login.ejs")
    } catch (error) {
        console.error("Error:", error);
        res.render("templates/internalerror.ejs")
    }
}

module.exports.loginuser = async (req,res)=>{
    try {
        req.flash("success","welcome back to Web Based Student Performance Assessment System")
        res.redirect("/home");
    } catch (error) {
        console.error("Error:", error);
        res.render("templates/internalerror.ejs")
    }
}

module.exports.logout = async (req,res,next)=>{
    req.logout((err)=>{
        if(err){
            next(err);
        }
    req.flash("success","you are logged out!");
    res.redirect("/login")
    })
}

module.exports.home = async(req,res)=>{
    try {
        res.render("templates/home.ejs");
    } catch (error) {
        console.error("Error:", error);
        res.render("templates/internalerror.ejs")
    }
    
}

module.exports.about = async(req,res)=>{
    try {
        const stdreviews = await reviews.find() 
        res.render("templates/aboutpage.ejs",{stdreviews});
    } catch (error) {
        console.error("Error:", error);
        res.render("templates/internalerror.ejs")
    }
   
}

module.exports.contactus = async(req,res)=>{
    try {
        res.render("templates/contact.ejs")
    } catch (error) {
        console.error("Error:", error);
        res.render("templates/internalerror.ejs")
    }
}