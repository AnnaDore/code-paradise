const session = require('express-session')
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose')

module.exports = app => {
   /*  app.use(
        session({
            secret: process.env.SESSION_SECRET,
            resave: false,
            saveUninitialized: true, 
            cookie: { maxAge: 60000}, //=1 min
            store: new MongoStore({
                mongooseConnection: mongoose.connection,
                ttl: 60 * 60 * 24 // sec min h = day
            })
        })
    ) */
}

