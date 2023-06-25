const express = require('express');
const router = express.Router();

const { incrementLoginAttempt } = require('../services/userService');
const { isAuthenticatedUser } = require('../middlewares/auth')

router.route('/incrementLoginAttempt').get(isAuthenticatedUser, incrementLoginAttempt);

module.exports = router;