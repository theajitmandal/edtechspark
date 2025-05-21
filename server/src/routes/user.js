const { Router } = require("express");
const { registerUser, logInUser, findAllUsers, forgotPassword } = require("../controller/user");
const router = Router();

router.post('/users', findAllUsers);
router.post('/register', registerUser  )
router.post('/login', logInUser)

router.post('/forgot_password', forgotPassword)

module.exports = router