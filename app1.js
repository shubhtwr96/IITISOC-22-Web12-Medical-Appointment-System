const express = require('express');
const mongoose = require('mongoose');
const passport = require("passport");
const googleStrategy = require("passport-google-oauth20");
const bodyParser = require('body-parser');
const homeRouter = require('./routers/homeRouter')

const port= process.env.port || 8080;

const app= express();

passport.use(new googleStrategy({
    clientID: "304525153014-hv1gp5jh6fo91lnmuajr0gcpcp372usv.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "auth/google/callback"
}, (accessToken, refreshToken, profile, done)=>{
    console.log(accessToken)
    console.log(refreshToken)
    console.log(profile)
}))
app.get("/auth/google", passport.authenticate("google", {
    scope: ["profile", "email"]
}))
app.get("/auth/google/callback", passport.authenticate("google"))

mongoose.connect('mongodb://localhost:27017/registration', {useNewUrlParser : true})
const db = mongoose.connection;

db.on("error",()=> {console.log("error in connection");})
db.once('open', ()=>{console.log("Connected");})

app.set('view engine','ejs')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/', homeRouter)

app.listen(port)