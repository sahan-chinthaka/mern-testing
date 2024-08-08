import { Router } from "express";
import { authenticateToken, fetchUserData, isSeller } from "../middlewares/user";
import { addProduct } from "../controllers/product";

const router = Router();

router.use(authenticateToken);
router.use(fetchUserData);

router.post("/", isSeller, addProduct);

export default router;
