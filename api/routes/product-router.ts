import { Router } from "express";
import { addProduct, deleteProduct, updateProduct } from "../controllers/product";
import { authenticateToken, fetchUserData, isSeller } from "../middlewares/user";

const router = Router();

router.use(authenticateToken);
router.use(fetchUserData);

router.post("/", isSeller, addProduct);
router.delete("/:productId", isSeller, deleteProduct);
router.put("/:productId", isSeller, updateProduct);

export default router;
