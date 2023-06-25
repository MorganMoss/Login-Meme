const express = require('express');
const router = express.Router()
const Callback = require("../services/googleAuthService").VerifyCallback
const Failure = require("../services/googleAuthService").Failure
const Authenticate = require("../services/googleAuthService").Authenticate

// Routes
router.get("/authenticate", Authenticate);

router.get("/callback", Callback);

router.get("/failure", Failure)

module.exports = router;