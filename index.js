const express = require('express');
const mongoose= require('mongoose');
const passport= require('passport');
const cookieSession = require('cookie-session');
const key = require('./config/keys');
require('./models/user');
require('./services/passport');

mongoose.connect(key.mongooseURL);
const app= express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys:[key.cookiekeys]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT);





