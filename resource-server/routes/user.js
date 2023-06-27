const express = require("express");
const router = express.Router();
const {registerView, landingView, googleSignInView, emailPassView, emailPassVerificationView, errorView, redirectingView} = require('../controllers/userController')

const { incrementLoginAttempt } = require('../services/userService');
const { isAuthenticatedUser } = require('../middlewares/auth')

router.route('/incrementLoginAttempt').get(isAuthenticatedUser, incrementLoginAttempt);

router.get("/", landingView);
router.get("/register", registerView);
router.get("/login1", googleSignInView);
router.get("/login2", emailPassView);
router.get("/login3", emailPassVerificationView);
router.get("/error", errorView);
// router.get("/redirecting", redirectingView);
// router.get("/errors", UserController.errors);


module.exports = router;