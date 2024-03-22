const User = require("../../models/users.js")


module.exports.registrationUser = (req,res)=>{
    res.render("users/signup.ejs")
};

module.exports.signupuser = async (req,res)=>{
    try{
        let {username , email ,password } = req.body;
        const newUser =new User({email,username});
        const regesteredUser = await User.register(newUser , password)
        req.flash("success","your are registration is successful");
        res.redirect("/login")
    }catch(e) {
        req.flash("error",e.message);
        res.redirect("/signup");
    }

}

module.exports.login = (req,res)=>{
    res.render("users/login.ejs")
}

module.exports.loginuser = async (req,res)=>{
    req.flash("success","welcome back to quiz")
    res.redirect("/home");
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
    res.render("templates/home.ejs");
}

module.exports.about = async(req,res)=>{
    res.render("templates/aboutpage.ejs");
}

module.exports.contactus = async(req,res)=>{
    res.render("templates/contact.ejs")
}