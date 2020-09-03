/*
    Auth route for handling all auth related requests
*/

// express
const express = require('express');
const router = express.Router();

// ----------------------------------------------------
// runValidation from /validation/index.js
const { validationResult } = require('express-validator');

const runValidation = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(422).json({
            error: errors.array()[0].msg
        })
    }

    next();
}
// ----------------------------------------------------

// middlewares controllers
const {
    signUp,
    signIn,
    preSignUp,
    signOut,
    forgotPassword,
    resetPassword,
    preSignIn
} = require('../controllers/auth');
const {
    preSignupValidator,
    signUpValidator,
    signInValidator,
    forgotPasswordValidator,
    resetPasswordValidator
} = require('../validators/auth');
const { runValidation } = require('../validators');

// routes
route.post('/pre-signup', preSignupValidator, runValidation, preSignUp);
router.post('/signup', signUpValidator, runValidation, signUp);
router.post('/signin', preSignIn, signInValidator, runValidation, signIn);
router.get('/signout', signOut);

// password reset
router.post(
    '/forgot-password',
    forgotPasswordValidator,
    runValidation,
    forgotPassword
);
router.post(
    '/reset-password',
    resetPasswordValidator,
    runValidation,
    resetPassword
);

module.exports = router;