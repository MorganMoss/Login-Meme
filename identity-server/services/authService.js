const sendToken = require('../utils/sendToken');
const sendEmail = require('../utils/sendEmail');
const ErrorHandler = require('../utils/ErrorHandler');
const randomize = require('randomatic');
const jwt = require('jsonwebtoken');
const {
    saveVerificationCode,
    findUserByID,
    hashPassword,
    comparePassword,
    saveUser,
    findUserByEmail,
    removeVerificationCode
} = require('../config/dbHelper');

const registerUser = async (req, res, next) => {
    const { email, password } = req.body;

    if(!email || !password) {
        return next(new ErrorHandler('Please enter email & password', 400));
    }

    const hashedPassword = await hashPassword(password);

    const result = await saveUser(email, hashedPassword);

    if(result === 0) {
        return next(new ErrorHandler('Invalid Server Error', 500));
    }

    res.status(200).json({
        success: true,
        message: 'Register successfully. Please login to verify your details'
    });

};

const normalLogin = async (req, res, next) => {
    const { email, password } = req.body;

    if(!email || !password) {
        return next(new ErrorHandler('Please enter email & password', 400));
    }

    if(!email.includes('@bbd.co.za')) {
        return next(new ErrorHandler('Please use your BBD account', 400));
    }

    const result = await findUserByEmail(email);

    if(!result.user || result === null) {
        return next(new ErrorHandler('Invalid Email or Password', 401));
    }

    const isPasswordMatched = await comparePassword(password, result.user.password);

    if(!isPasswordMatched) {
        return next(new ErrorHandler('Invalid Email or Password', 401));
    }

    sendToken(result.user, 200, res);
};

const loginWithVerificationCode = async (req, res, next) => {
    const { email, password } = req.body;

    if(!email || !password) {
        return next(new ErrorHandler('Please enter email & password', 400));
    }

    if(!email.includes('@bbd.co.za')) {
        return next(new ErrorHandler('Please use your BBD account', 400));
    }

    const result = await findUserByEmail(email);

    if(!result.user || result === null || result.rowsAffected === 0) {
        return next(new ErrorHandler('Invalid Email or Password', 401));
    }

    const isPasswordMatched = await comparePassword(password, result.user.password);

    if(!isPasswordMatched) {
        return next(new ErrorHandler('Invalid Email or Password', 401));
    }

    const verificationCode = randomize('0', 6, { chars: 'jonschlinkert', exclude: ['0','O','o']});
    const saved = await saveVerificationCode(result.user.email, verificationCode);

    if(saved === 0) {
        return next(new ErrorHandler('Internal Server Error', 500));
    }

    try {
        const verificationMessage = `Hi ${result.user.email}, Please find your Verification Code: ${verificationCode}`
        await sendEmail({ email: result.user.email, subject: 'Verification Code', message: verificationMessage});

        res.status(200).json({
            success: true,
            user: result.user
        });
    } catch(err) {
        console.log('error email: ', err);

        return next(new ErrorHandler(err.message, 500));
    }
};

const verifyEmailCode = async (req, res, next) => {
    const { verifyCode } = req.body;

    const token = req.headers['authorization'];

    if(!token) {
        return next(new ErrorHandler('Something went wrong', 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const result = await findUserByID(decoded.id);

    if(!result.user || result === null || result.rowsAffected === 0) {
        return next(new ErrorHandler('Invalid JWT Token', 400));
    }

    if(result.user.verificationCode != verifyCode) {
        return next(new ErrorHandler('Invalid Verification Code', 400));
    }

    await removeVerificationCode(result.user.email);

    res.status(200).json({
        success: true,
        verified: true
    });
}

const logout = async (req, res, next) => {
    req.headers['authorization'] = '';

    res.status(200).json({
        success: true
    });
}

module.exports = {
    registerUser,
    normalLogin,
    loginWithVerificationCode,
    verifyEmailCode,
    logout
}