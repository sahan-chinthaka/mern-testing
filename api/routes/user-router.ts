import { Router } from "express";
import { userRegistration } from "../controllers/user";

const router = Router();

router.post("/register", userRegistration);

export default router;
