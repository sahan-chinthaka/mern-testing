import { Router } from "express";
import { getUser, userLogin, userRegistration } from "../controllers/user";
import { authenticateToken } from "../middlewares/user";

const router = Router();

router.post("/register", userRegistration);
router.post("/login", userLogin);

router.use(authenticateToken);

router.get("/", getUser);

export default router;
