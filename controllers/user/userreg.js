const crypto = require('crypto');
const nodemailer = require('nodemailer');
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

// Function to generate verification token
const generateVerificationToken = () => {
    return crypto.randomBytes(20).toString('hex');
};

module.exports.signupuser = async (req, res) => {
    try {
        let { username, email, password } = req.body;

        // Generate verification token
        const verificationToken = generateVerificationToken();

        // Create a new user with email verification status set to false and save the token
        const newUser = new User({ email, username, emailVerified: false, verificationToken });
        const registeredUser = await User.register(newUser, password);

        // Send verification email
        const verificationLink = `https://online-exam-portal-ymbm.onrender.com/verify-email?token=${verificationToken}`;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.MAIL_USER,
            to: email,
            subject: 'Verify your email address',
            text: `Please click the following link to verify your email address: ${verificationLink}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending verification email:', error);
                req.flash("error", "Failed to send verification email");
                return res.redirect("/signup");
            } else {
                console.log('Verification email sent:', info.response);
                req.flash("success", "Verification email sent. Please check your inbox.");
                res.redirect("/login");
            }
        });
    } catch (error) {
        console.error("Error:", error);
        req.flash("error", error.message);
        res.redirect("/signup");
    }
};

module.exports.verifyUser = async (req, res) => {
    try {
        const token = req.query.token;
        const user = await User.findOne({ verificationToken: token });

        if (!user) {
            req.flash("error", "Invalid verification token");
            return res.redirect("/signup");
        }

        user.emailVerified = true;
        user.verificationToken = undefined;
        await user.save();

        req.flash("success", "Email verified successfully. You can now login.");
        res.redirect('/login');
    } catch (error) {
        console.error("Error:", error);
        req.flash("error", error.message);
        res.redirect("/signup");
    }
};

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
        const {username} = req.body;
        const userid = await User.findOne({username:username});
        
        if (userid.emailVerified === 'false') {
            req.flash("error", "Please verify your email address before logging in.");
            return res.redirect("/login");
        }

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