const { Router } = require("express");
const { registerUser, logInUser, findAllUsers } = require("../controller/user");
const router = Router();

router.post('/users', findAllUsers);
router.post('/register', registerUser  )
router.post('/login', logInUser)

module.exports = router