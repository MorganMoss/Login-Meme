const Strategy = require("passport-google-oauth2").Strategy;
const passport = require("passport");
const config = require("../config/google");



const VerifyFunction = async (accessToken, refreshToken, profile, done) => {
    const email = profile.email
    //Find user details

    //If no user, through error to middleware

    // Continue with authentication flow
    return done(null, profile);

}

const StrategyOptions = {
    clientID: config.google_client_id,
    clientSecret: config.google_client_secret,
    callbackURL: config.google_callback_url,
    passReqToCallback: true,
}

passport.use(
    new Strategy(
        StrategyOptions,
        VerifyFunction
    )
);

// Serialization and deserialization of users
passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

const Authenticate = async () => passport.authenticate("google", {
    scope: ["email", "profile"],
})

const Callback = async () => passport.authenticate("google", {
        successRedirect: "/", //TODO: decide where to go next
        failureRedirect: "/", //TODO: decide what happens with fail
    })

const Failure = async (req, res) => {
    res.send("Something went wrong with Google authentication");
};

module.exports = {
    Authenticate, Callback, Failure
}
