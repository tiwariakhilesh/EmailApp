const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const key = require('../config/keys');
const mongoose= require('mongoose');

const User= mongoose.model('users');

passport.serializeUser((user, done)=>{
    done(null, user.id);
});
passport.deserializeUser((id, done)=>{
    User.findById(id)
    .then(user=>{
        done(null, user);
    })
});
passport.use(new GoogleStrategy(
    {
        clientID: key.googleClientId,
        clientSecret: key.googleClientSecret,
        callbackURL : '/auth/google/callback',
        proxy:true
    }
    , async(accessToken, refreshToken, profile, done)=>{
        const existingUser= await User.findOne({googleId: profile.id})
        
            if(existingUser){
                // we already have record with given id
               return  done(null, existingUser);
            }
            const user= await new User({ googleId: profile.id}).save()
            done(null, user);  
    })
);