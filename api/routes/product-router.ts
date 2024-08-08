import { Router } from "express";
import { authenticateToken, fetchUserData, isSeller } from "../middlewares/user";
import { addProduct, deleteProduct } from "../controllers/product";

const router = Router();

router.use(authenticateToken);
router.use(fetchUserData);

router.post("/", isSeller, addProduct);
router.delete("/:productId", isSeller, deleteProduct);

export default router;
