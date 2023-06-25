const express = require('express');
const router = express.Router();

const { registerUser, normalLogin, loginWithVerificationCode, verifyEmailCode, logout } = require('../services/authService');
const { isAuthenticatedUser } = require('../middlewares/auth')

router.post('/auth/register', registerUser);
router.post('/auth/login', normalLogin);
router.route('/auth/login/verification').post(isAuthenticatedUser, loginWithVerificationCode);
router.route('/auth/verify/code').post(isAuthenticatedUser, verifyEmailCode);
router.route('/logout').get(logout);

module.exports = router;