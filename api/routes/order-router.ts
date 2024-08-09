import { Router } from "express";
import { authenticateToken, fetchUserData, isBuyer } from "../middlewares/user";
import { createOrder, getOrders } from "../controllers/orders";

const router = Router();

router.use(authenticateToken);
router.use(fetchUserData);

router.post("/", isBuyer, createOrder);
router.get("/", getOrders);

export default router;
