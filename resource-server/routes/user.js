const express = require("express");
const router = express.Router();
const {registerView, loginView, googleSignInView, emailPassView, emailPassVerificationView} = require('../controllers/userController')

const UserController = require("../controllers/userController");
const authController = require("../../identity-server/services/authService");
const { incrementLoginAttempt } = require('../services/userService');
const { isAuthenticatedUser } = require('../middlewares/auth')

router.route('/incrementLoginAttempt').get(isAuthenticatedUser, incrementLoginAttempt);

// router.get("/auth/google", authController.normalLogin)

// whats needed for Callback 
// router.get("/auth/google/callback", authController.Callback, 
// UserController.
// );

router.get("/", googleSignInView);
router.get("/login", loginView);
router.get("/register", registerView);
router.get("/emailPassView", emailPassView);
router.get("/emailPassVerificationView", emailPassVerificationView);
// router.get("/errors", UserController.errors);


module.exports = router;