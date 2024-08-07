import { Request, Response } from "express";
import User from "../models/user";
import bcrypt from "bcrypt";

export async function userRegistration(req: Request, res: Response) {
	const newUser = new User({
		email: req.body.email,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		password: await bcrypt.hash(req.body.password, 10),
		isSeller: req.body.isSeller,
	});

	try {
		await newUser.save();
	} catch (e: any) {
		return res.status(500).json({
			error: e.message,
			code: e.code,
			created: false,
		});
	}
	return res.json({ created: true, id: newUser.id });
}
