if (process.env.NODE_ENV != 'production') {
    require("dotenv").config();
}

const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const sessions = require("express-session");
const MongoStore = require('connect-mongo');
const ejsMate = require("ejs-mate");
const flash = require("connect-flash");
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const moment = require('moment');


 
// const mongourl = 'mongodb://127.0.0.1:27017/quiz';
const db_url = process.env.MONGODB_URL

const registerrouter = require("./routes/userroute.js");
const User = require("./models/users.js");


 
main().then(()=>{
    console.log("connected to db")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect(db_url);   
}

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.urlencoded({extended : true}));
app.engine("ejs",ejsMate);
app.use('/images', express.static('images'));
app.use(express.static(path.join(__dirname,"/public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
 
const store = MongoStore.create({
    mongoUrl : db_url,
    crypto : {
        secret : process.env.SECRET,
    },
    touchAfter : 24* 3600
});

store.on("error",()=>{
    console.log("ERROR in MONGO SESSION STORE",err)
});


const sessionOptions = {
    store,
    secret : process.env.SECRET,
    resave :false,
    saveUninitialized : true,
    cookie : {
        expires : Date.now()+7*24*60*60*1000,
        maxAge : 7*24*60*60*1000,
        httpOnly : true,
    },
} 

//session before passport.session()
app.use(sessions(sessionOptions));

//passport initialization
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());


app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

//passport
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//routes
app.use("/",registerrouter);

app.get("/",(req,res)=>{
    res.redirect("/home")
});

app.listen(8080,()=>{
    console.log("server is started")
})