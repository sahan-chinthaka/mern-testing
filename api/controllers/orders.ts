import { Request, Response } from "express";
import Order from "../models/order";
import Product from "../models/product";

export async function createOrder(req: Request, res: Response) {
	let order;
	let { productId, count } = req.body;
	count = parseInt(count);

	try {
		const product = await Product.findById(productId);

		if (count <= 0) throw new Error("Count must be a positive integer");

		if (!product) throw new Error("Product is not found: " + productId);

		if (product.count < count) throw new Error("Not enough lot in the product to order");

		await product.updateOne({ count: product.count - count });

		order = new Order({
			user: req.userData?.id,
			product: productId,
			count: count,
		});

		await order.save();
	} catch (e: any) {
		return res.json({
			error: e.message,
			code: e.code,
			created: false,
		});
	}
	return res.json({ created: true, id: order.id });
}
