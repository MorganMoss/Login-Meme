const express = require("express");
const router = express.Router();
const {registerView, landingView, googleSignInView, emailPassView, emailPassVerificationView, errorView} = require('../controllers/userController')

const UserController = require("../controllers/userController");
const authController = require("../../identity-server/services/authService");
const { incrementLoginAttempt } = require('../services/userService');
const { isAuthenticatedUser } = require('../middlewares/auth')

router.route('/incrementLoginAttempt').get(isAuthenticatedUser, incrementLoginAttempt);

router.get("/", landingView);
router.get("/register", registerView);
router.get("/login1", googleSignInView);
router.get("/login2", emailPassView);
router.get("/login3", emailPassVerificationView);
router.get("/error", errorView);
// router.get("/errors", UserController.errors);


module.exports = router;