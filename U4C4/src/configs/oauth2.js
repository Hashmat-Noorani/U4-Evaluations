require("dotenv").config();
const User = require("../models/userModel");
const { v4: uuidv4 } = require("uuid");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const passport = require("passport");
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:4000/auth/google/callback",
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {
      // console.log(profile);
      let user = await User.findOne({ email: profile?._json?.email })
        .lean()
        .exec();
      if (!user) {
        user = User.create({
          firstName: profile?._json?.given_name,
          lastName: profile?._json?.family_name,
          email: profile?._json?.email,
          password: uuidv4(),
        });
      }
      return done(null, user);
    }
  )
);
module.exports = passport;
