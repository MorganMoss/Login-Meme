const express = require('express');
const router = express.Router();

const { normalLogin, loginWithVerificationCode } = require('../services/authService');
const { isAuthenticatedUser } = require('../middlewares/auth')

router.route('/login').post(normalLogin);
router.route('/login/verification').post(isAuthenticatedUser, loginWithVerificationCode);

module.exports = router;