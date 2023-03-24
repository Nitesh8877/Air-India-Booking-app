const passport = require('passport')
const localStretegy = require('passport-local');
const User = require('../models/user')
const jwtStreategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
passport.use('signup', new localStretegy({
    usernameField: 'email',
    passwordField: 'password'
},
    async (email, password, done) => {
        try {
            const user = await User.create({ email, password })
            return done(null, user)
        } catch (error) {
            console.log(err);
            done(err);
        }
    }
))

passport.use('login', new localStretegy({
    usernameField: 'email',
    passwordField: 'password',

},
    async (email, password) => {
        try {
            const user = await User.findOne({ email });
            if (!user) {
                return done(null, false, { message: "User not found" });
            }
            const validate = await user.isValidPassword(password);
            if (!validate) {
                return done(null, false, { message: "Wrong Password" })
            }
            return done(null, user, { message: "Logged in Successfully" })

        } catch (error) {
            console.log(err)
            return done
        }
    }
))

passport.use(new jwtStreategy(
    {
        secretOrKey:'Top_secret',
        jwtFromRequest:ExtractJwt.fromUrlQueryParameter('secret_token')
    },
        async(token,done)=>{
        try {
            return done(null,token.user)
            
        } catch (error) {
            console.log(error)
            done(error)
            
        }
    }
))