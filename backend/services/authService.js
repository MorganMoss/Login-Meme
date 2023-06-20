const sendToken = require('../utils/sendToken');

const normalLogin = async (req, res, next) => {
    const { email, password } = req.body;

    if(!email || !password) {
        return next(new ErrorHandler('Please enter email & password', 400));
    }

    //Find user details

    //If no user, through error to middleware

    //Check if password match

    //If no passwords dont match, through error to middleware

    sendToken(user, 200, res);
};

const loginWithVerificationCode = async (req, res, next) => {
    //TODO
};

module.exports = {
    normalLogin,
    loginWithVerificationCode 
}