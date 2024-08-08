import { NextFunction, Request, Response } from "express";
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

export async function deleteProduct(req: Request, res: Response, next: NextFunction) {
	const { productId } = req.params;

	try {
		await Product.findByIdAndDelete(productId);
	} catch (e: any) {
		return res.status(500).json({
			error: e.message,
			code: e.code,
			deleted: false,
		});
	}
	return res.json({
		deleted: true,
	});
}

export async function updateProduct(req: Request, res: Response, next: NextFunction) {
	const { productId } = req.params;
	const { user, ...rest } = req.body;

	try {
		await Product.findByIdAndUpdate(productId, rest);
	} catch (e: any) {
		return res.status(500).json({
			error: e.message,
			code: e.code,
			updated: false,
		});
	}
	return res.json({
		updated: true,
	});
}
