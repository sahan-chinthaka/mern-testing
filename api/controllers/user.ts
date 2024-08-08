import { Request, Response } from "express";
import User from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

export async function userLogin(req: Request, res: Response) {
	const { email, password } = req.body;
	let user;

	try {
		user = await User.findOne({ email });

		if (!user) throw new Error("User not found: '" + email + "' with this email");

		const matched = await bcrypt.compare(password, user.password);

		if (!matched) throw new Error("Password is wrong");
	} catch (e: any) {
		return res.status(500).json({
			error: e.message,
			code: e.code,
		});
	}

	const token = jwt.sign({ email }, process.env.TOKEN_SECRET as string, {
		expiresIn: "24h",
	});

	return res.json({
		firstName: user.firstName,
		lastName: user.lastName,
		isSeller: user.isSeller,
		token,
	});
}

export async function getUser(req: Request, res: Response) {
	let user;

	try {
		const email = req.user;
		user = await User.findOne({ email });

		if (!user) throw new Error("User not found: '" + email + "' with this email");
	} catch (e: any) {
		return res.status(500).json({
			error: e.message,
			code: e.code,
		});
	}

	return res.json({
		firstName: user.firstName,
		lastName: user.lastName,
		isSeller: user.isSeller,
	});
}

export async function deleteUser(req: Request, res: Response) {
	try {
		await User.deleteOne({
			email: req.user,
		});
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
