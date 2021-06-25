import express from "express";
import controller from "../controllers/user.controller";
import extractFirebaseInfo from "../middlewares/extractFirebase";

const router = express.Router();

router.get("/validate", extractFirebaseInfo, controller.validate);
router.get("/:userID", controller.read);
router.get("/create", extractFirebaseInfo, controller.create);
router.get("/login", extractFirebaseInfo, controller.login);
router.get("/", controller.readAll);

export default router;
