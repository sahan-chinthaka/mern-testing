import { Router } from "express";
import { authenticateToken, fetchUserData, isBuyer } from "../middlewares/user";
import { createOrder } from "../controllers/orders";

const router = Router();

router.use(authenticateToken);
router.use(fetchUserData);

router.post("/", isBuyer, createOrder);

export default router;
