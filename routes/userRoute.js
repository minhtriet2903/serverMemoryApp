const Router = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const articleController = require("../controllers/articleController");

const router = Router();

router.post("/users/register", authController.register);
router.post("/users/login", authController.login);
router.put("/users/:id", userController.updateUser);
router.get("/users", userController.getUsers);
router.get("/users/:id", userController.getUserById);
router.get("/users/:id/articles", articleController.getArticleOfUser);

module.exports = router;
