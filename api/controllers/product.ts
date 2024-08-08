import { Request, Response } from "express";
import Product from "../models/product";

export async function addProduct(req: Request, res: Response) {
	const { title, description, price, count } = req.body;

	const newProduct = new Product({
		title,
		description,
		price,
		count,
		user: req.userData?.id,
	});

	try {
		await newProduct.save();
	} catch (e: any) {
		return res.status(500).json({
			error: e.message,
			code: e.code,
			created: false,
		});
	}
	return res.json({ created: true, id: newProduct.id });
}
