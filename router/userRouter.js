import express from "express";
import userController from "../controller/userController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/add", userController.add);
router.get("/login", userController.login);
router.get("/all", userController.getAllUser);
router.get("/authLogin", auth, userController.authLogin);
router.post("/logOut", auth, userController.logOut);
router.post("/logOutAll", auth, userController.logOutAll);
router.patch("/update", auth, userController.update);
router.delete("/delete", auth, userController.deleteUser);

export default router;
