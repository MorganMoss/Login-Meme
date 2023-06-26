const path = require("path");

const registerView = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/register.html"));
};

const loginView = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/login1.html"));
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



module.exports = {
    registerView,
    loginView,
    googleSignInView,
    emailPassView,
    emailPassVerificationView
  };
