const router = require("express").Router();
const userController = require("../controllers/userController");
const { authenticate, authorize, verify } = require("../middlewares/verify")

//get all users data
router.get("/", authenticate, authorize, userController.getAll);

//get one user data find by any
router.get("/:id", authenticate, verify, userController.findOne);

//register new user
router.post("/", authenticate, authorize, userController.register);

//update a user
router.put("/:id", authenticate, verify, userController.update);

//delete a user
router.delete("/:id", authenticate, verify, userController.delete);

module.exports = router;