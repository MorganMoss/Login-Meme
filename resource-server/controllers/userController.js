const path = require("path");

const registerView = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/register.html"));
};

const landingView = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/landing.html"));
};

const googleSignInView = (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"));
};

const emailPassView = (req, res) => {
    res.sendFile(path.join(__dirname, "../views/loginEmailPass.html"));
};

const emailPassVerificationView = (req, res) => {
    res.sendFile(path.join(__dirname, "../views/loginEmailPassVerification.html"));
};

const errorView = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/error.html"));
};


module.exports = {
    registerView,
    landingView,
    googleSignInView,
    emailPassView,
    emailPassVerificationView,
    errorView
  };
