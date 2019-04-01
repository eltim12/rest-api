const router = require("express").Router();
const userController = require("../controllers/userController");

//register new user
router.post("/register", userController.register);

//login user
router.post("/login", userController.login)

module.exports = router;